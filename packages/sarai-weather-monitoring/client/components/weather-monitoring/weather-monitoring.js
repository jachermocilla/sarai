Template.WeatherMonitoring.onCreated(() => {
  // Meteor.subscribe('weather-stations')
})

Template.WeatherMonitoring.onRendered(() => {

  /******DIALOG*******/

  const dialog = document.querySelector('#weather-monitoring-dialog')

  dialog.querySelector('.cancel').addEventListener('click', () => {
    dialog.close();
  });

  /****MAP****/
  const northEast = L.latLng(21.924058, 115.342984);
  const southWest = L.latLng(4.566972, 128.614468);
  const bounds = L.latLngBounds(southWest, northEast);

  const weatherMap = L.map('weather-map', {
      maxBounds: bounds,
      center: [14.154604, 121.247505],
      zoom: 8,
      minZoom: 7
  });

  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg',{
        maxZoom: 20
    }).addTo(weatherMap);

  weatherMap.zoomControl.setPosition('bottomleft');

  const showWeatherData = (stationID, label, event) => {


    displayWeatherData(stationID, label)
    Session.set('stationID', stationID)


    dialog.showModal();
  }

  Meteor.subscribe("weather-stations", () => {
    Meteor.autorun(() => {
      const stations = WeatherStations.find().fetch()

      for (let a = 0; a < stations.length; a++) {
        const station = stations[a]
        const x = station.coords[0]
        const y = station.coords[1]
        const label = station.label
        const stationID = station.id

        const marker = new L.marker([x, y])
        .bindPopup(`<h5>${label}</h5>`)
        .on('click', L.bind(showWeatherData, null, stationID, label))

        marker.addTo(weatherMap)
      }
    })
  })


  /***********HIGHCHARTS HANDLERS************/
  $('#meteogram-container').bind('mousemove touchmove touchstart', function (e) {

      for (let i = 0; i < Highcharts.charts.length; i = i + 1) {
        const chart = Highcharts.charts[i];
        const event = chart.pointer.normalize(e.originalEvent); // Find coordinates within the chart

        // console.log(event.chartX, + ' ' + event.chartY)

        const point = chart.series[0].searchPoint(event, true); // Get the hovered point

        if (point) {
          point.highlight(e);
        }
      }
    });

  Highcharts.Pointer.prototype.reset = function () {
    return undefined;
  };

  Highcharts.Point.prototype.highlight = function (event) {
    this.onMouseOver(); // Show the hover marker
    this.series.chart.tooltip.refresh(this); // Show the tooltip
    this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair
  };

})

const displayWeatherData = (stationID, label) => {
  $('#weather-monitoring-dialog-title').html(label)

  const apiKey = '9470644e92f975d3'
  const dataFeatures = [ 'conditions', 'hourly10day', 'forecast10day']

  $.getJSON(`http:\/\/api.wunderground.com/api/${apiKey}${featureURI(dataFeatures)}/q/pws:${stationID}.json`, (result) => {

    const data = getSeries(result)
    const tickPositions = getTickPositions(result)
    const altTickPositions = getAltTickPositions(result)
    const plotLines = getPlotLines(tickPositions)

    const charts = [
      {
        element: '#temp-meteogram',
        title: 'Temperature',
        name: 'Temp',
        id: 'temp',
        data: data.temp,
        unit: '°C',
        tickPositions: tickPositions,
        color: '#ff8c1a'
      },
      {
        element: '#rain-meteogram',
        title: 'Chance of Rain of Rain',
        name: 'Chance of Rain',
        id: 'pop',
        data: data.pop,
        unit: '%',
        tickPositions: tickPositions,
        color: '#0073e6'
      }
    ]

    function syncExtremes(e) {
      const thisChart = this.chart
      if (e.trigger !== 'syncExtremes') { // Prevent feedback loop
        Highcharts.each(Highcharts.charts, function (chart) {
          if (chart !== thisChart) {
            if (chart.xAxis[0].setExtremes) { // It is null while updating
              chart.xAxis[0].setExtremes(e.min, e.max, undefined, false, { trigger: 'syncExtremes' });
            }
          }
        });
      }
    }

    //remove any existing charts first
    $('div.meteogram').remove()


    //add new charts
    charts.forEach((element, index) => {
      $('<div class="meteogram">')
        .appendTo('#meteogram-container')
        .highcharts(
          {
            chart: {
              marginLeft: 40,
              spacingTop: 20,
              spacingBottom: 20,
              height: 200
            },

            title: {
              text: element.title,
              align: 'left',
              margin: 0,
              x: 30
            },

            xAxis: [
              {

                crosshair: true,
                tickPositions: tickPositions,
                tickPosition: 'inside',
                opposite: true,
                events: {
                  setExtremes: syncExtremes
                },
                labels: {
                  enabled: false
                },
                plotLines: plotLines
              },

              {
                tickPositions: altTickPositions,
                tickWidth: 0,
                labels: {
                  formatter: function () {
                    var s = Highcharts.dateFormat('%e %b', new Date(this.value));

                    return s;
                  }
                },
                linkedTo: 0
              }

            ],

            yAxis: {
              labels: {
                format: '{value}' + element.unit,
                style: {
                    // color: '#ff1a1a',
                    fontWeight: 'bold'
                }
              },
            },

            series: [{
              name: element.name,
              id: element.id,
              data: element.data,
              type: 'spline',
              color: element.color,
              tooltip: {
                  valueDecimals: 0
              }
            }],

            tooltip: {
              formatter: function () {
                let s = '<b>' + Highcharts.dateFormat('%e %b - %H:00', new Date(this.x)) + '</b>';

                s += '<br />' + this.series.name + ': ' + this.y + element.unit;
                return s;
              }
            }

          }
        )
    })
  })
}

const featureURI = (features) => {
  let result = ''

  features.forEach((element, index) => {
    result += '/'
    result += element
  })

  return result
}

const getSeries = (data) => {
  let temp = []
  let pop = []
  let windSpd = []

  const forecast = data.hourly_forecast


  for (let entry of forecast) {

    const ftc = entry.FCTTIME;
    const utcDate = Date.UTC(ftc.year, ftc.mon-1, ftc.mday, ftc.hour);

    temp.push([utcDate, parseInt(entry.temp.metric)])
    pop.push([utcDate, parseInt(entry.pop)])
    windSpd.push([utcDate, parseInt(entry.wspd.metric)])
  }

  const result = {
    temp,
    pop,
    windSpd
  }

  return result
}

const getTickPositions = (data) => {
  const df = data.forecast.simpleforecast.forecastday

  const tickPositions = [];
  let year = 0;
  let month = 0;
  let day = 0;

  for (let entry of df) {
    const date = entry.date;
    year = date.year;
    month = date.month - 1;
    day = date.day;

    tickPositions.push(Date.UTC(year, month, day, 0))
  }

  const nextDay = day < 31 ? day + 1 : 1
  tickPositions.push(Date.UTC(year, month, nextDay, 0));

  return tickPositions;
}

const getAltTickPositions = (data) => {
  const df = data.forecast.simpleforecast.forecastday
  const altTickPositions = [];
  let year = 0;
  let month = 0;
  let day = 0;

  for (let entry of df) {
    const date = entry.date;
    year = date.year;
    month = date.month - 1;
    day = date.day;

    altTickPositions.push(Date.UTC(year, month, day, 12))
  }

  const nextDay = day < 31 ? day + 1 : 1
  altTickPositions.push(Date.UTC(year, month, nextDay, 12));

  return altTickPositions;
}

const getPlotLines = (ticks) => {
  let plotLines = []

  ticks.forEach((element, index) => {
    plotLines.push({
      color: '#bfbfbf',
      width: 1,
      value: element
    })
  })

  return plotLines
}