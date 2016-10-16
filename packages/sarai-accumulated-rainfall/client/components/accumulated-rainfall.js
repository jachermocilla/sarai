Template.AccumulatedRainfall.onCreated(() => {
  //subscribe to last 30 days of data
  Meteor.subscribe('weather-data-30')
  Meteor.subscribe('dss-settings')
})

Template.AccumulatedRainfall.onRendered(() => {

  /******DIALOG*******/

  const dialog = document.querySelector('#accumulated-rainfall-dialog')

  dialog.querySelector('.cancel').addEventListener('click', () => {
    dialog.close();
  });

  Tracker.autorun(() => {
    const stationID = FlowRouter.getParam('stationID')
    if (stationID) {
      Meteor.subscribe('weather-stations', () => {
        const station = WeatherStations.findOne({id: stationID})
        $('#accumulated-rainfall-dialog-title').html(`Accumulated Rainfall for ${Meteor.Rainfall.stripTitle(station.label)}`)
      })

      displayRainData(stationID)

      if (!$('#accumulated-rainfall-dialog').is(':visible')) {
        dialog.showModal()
      }
    }
  })


  /****MAP****/
  const northEast = L.latLng(21.924058, 115.342984);
  const southWest = L.latLng(4.566972, 128.614468);
  const bounds = L.latLngBounds(southWest, northEast);

  const rainfallMap = L.map('accumulated-rainfall-map', {
      maxBounds: bounds,
      center: [14.154604, 121.247505],
      zoom: 8,
      minZoom: 7
  });

  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg',{
        maxZoom: 20
    }).addTo(rainfallMap);

  rainfallMap.zoomControl.setPosition('bottomleft');

  const showAccumulatedRainfall = (stationID, label, event) => {

    // displayWeatherData(stationID, label)
    Session.set('stationID', stationID)
    FlowRouter.go(`/accumulated-rainfall/${stationID}`)
  }

  Meteor.subscribe('weather-stations', () => {
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
        .on('click', L.bind(showAccumulatedRainfall, null, stationID, label))

        marker.addTo(rainfallMap)
      }
    })
  })
})

const displayRainData = (stationID) => {
  //remove any existing chart first
  $('div.rainfall-chart').remove()

  //Add (temporary) spinner
  $('<div class="rainfall-chart rainfall-chart-stub"><div class="mdl-spinner mdl-js-spinner is-active"></div></div>').appendTo('#rainfall-chart-container')

  const weatherData = WeatherData.find({id: stationID}).fetch()

  //have to reconcile missing entries
  if (weatherData) {
    const fixedData = Meteor.Rainfall.fillMissingEntries(weatherData.reverse())

    const pastRainfall = Meteor.Rainfall.getPastRainfall(fixedData)

    const apiKey = DSSSettings.findOne({name: 'wunderground-api-key'})

    if (apiKey) {
      $.getJSON(`http:\/\/api.wunderground.com/api/${apiKey.value}/forecast10day/q/pws:${stationID}.json`, (result) => {

        // const result = Meteor.RainfallSampleData.sampleData()

        //remove any existing chart first
        $('div.rainfall-chart').remove()

        const runningTotal = pastRainfall.pastAccRainfall[29].y

        const forecast = Meteor.Rainfall.getForecast(result, runningTotal)

        const completeData = Meteor.Rainfall.assembleRainfallData(pastRainfall.pastRainfall, pastRainfall.pastAccRainfall, forecast.forecastRainfall, forecast.forecastAccumulated)

        $('<div class="rainfall-chart">').appendTo('#rainfall-chart-container').highcharts(Meteor.Rainfall.constructChart(completeData.completeRainfall, completeData.completeAccumulatedRainfall, forecast.plotBandStart, forecast.plotBandEnd))
      })
    }
  }
}