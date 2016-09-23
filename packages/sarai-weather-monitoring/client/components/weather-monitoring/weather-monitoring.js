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

  const showWeatherData = (stationID, event) => {
    // console.log(`stationID: ${stationID}`)
    // console.log(event)

    displayWeatherData(stationID)
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
        .on('click', L.bind(showWeatherData, null, stationID))

        marker.addTo(weatherMap)
      }
    })
  })
})

Template.WeatherMonitoring.helpers({

})

const displayWeatherData = (stationID) => {
  const apiKey = '9470644e92f975d3'

  const dataFeatures = [ 'conditions', 'forecast', 'hourly10day' ]

  // $.getJSON(`http:\/\/api.wunderground.com/api/${apiKey}${featureURI(dataFeatures)}/q/pws:${stationID}.json`, (result) => {
  //   console.log(result)
  // })

  const data = getSeries(sampleData())

  $('#wm-meteogram').highcharts(
    {
      rangeSelector: {
          selected: 1
      },

      title: {
        text: 'Weather Forecast'
      },

      series: [{
        name: 'Temp',
        id: 'temp',
        data: data.temp,
        type: 'spline',
        tooltip: {
            valueDecimals: 0
        }
      }]
    }
  );

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
  let windSpd = []

  const forecast = data.hourly_forecast

  for (let a = 0; a < forecast.length; a++) {
    const entry = forecast[a]

    temp.push(parseInt(entry.temp.metric))
    windSpd.push(parseInt(entry.wspd.metric))
  }

  const result = {
    temp,
    windSpd
  }

  console.log(result)

  return result
}