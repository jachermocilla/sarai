Template.RainfallOutlookView.onCreated(() => {
  Meteor.subscribe('regions')
  Meteor.subscribe('provinces')
  Meteor.subscribe('weather-outlook')

  //default is Region IV-A: CALABARZON, Laguna and Los Baños
  Session.set('region', 'Region IV-A: CALABARZON')
  Session.set('province', 'Laguna')
  Session.set('municipality', 'Los Baños')
})

Template.RainfallOutlookView.onRendered(() => {
  const region = Session.get('region')
  $('#preview-select-region').val(region)

  const province = Session.get('province')
  $('#preview-select-province').val(province)

  const municipality = Session.get('municipality')
  $('#preview-select-municipality').val(municipality)
})

Template.RainfallOutlookView.events({
  'change #preview-select-region': (e) => {
    const region = e.currentTarget.value
    Session.set('region', region)

    const province = Regions.findOne({region:region}).province[0]

    // sets province to first province in the chosen region 
    Session.set('province',Regions.findOne({region:region}).province[0])

    // sets municipality to first municipality in the chosen province 
    Session.set('municipality',Provinces.findOne({province:province}).municipality[0])
  },
  
  'change #preview-select-province': (e) => {
    const province = e.currentTarget.value
    Session.set('province', province)

    // sets municipality to first municipality in the chosen province 
    Session.set('municipality',Provinces.findOne({province:province}).municipality[0])
  },

  'change #preview-select-municipality': (e) => {
    const municipality = e.currentTarget.value
    Session.set('municipality', municipality)
  },
})

Template.RainfallOutlookView.helpers({

  monthlyRainfall: () => {
      const region = Session.get('region')
      const province = Session.get('province')
      const municipality = Session.get('municipality')
      const weatherOutlook = WeatherOutlook.findOne({region:region, province: province, municipality: municipality}).data.month

      if (weatherOutlook){
        let outlook = []

        // outlook.push({
        //   head: 'January',
        //   value: Math.round(weatherOutlook.January * 10) / 10
        // })

        // outlook.push({
        //   head: 'February',
        //   value: Math.round(weatherOutlook.February * 10) / 10
        // })

        outlook.push({
          head: 'March',
          value: Math.round(weatherOutlook.March * 10) / 10
        })

        outlook.push({
          head: 'April',
          value: Math.round(weatherOutlook.April * 10) / 10
        })

        outlook.push({
          head: 'May',
          value: Math.round(weatherOutlook.May * 10) / 10
        })

        outlook.push({
          head: 'June',
          value: Math.round(weatherOutlook.June * 10) / 10
        })

        outlook.push({
          head: 'July',
          value: Math.round(weatherOutlook.July * 10) / 10
        })

        return outlook
      }
  },

  regions: () => {
    const regions = Regions.find({}).fetch()

    return regions
  },

  currentlySelectedRegion: (curr) => {
    const region = Session.get('region')
    $('#preview-select-region').val(region)
  },

  provinces: () => {
    const region = Session.get('region')
    const provinces = Regions.findOne({region:region})

    return provinces && provinces.province
  },

  currentlySelectedProvince: (curr) => {
    const province = Session.get('province')
    $('#preview-select-province').val(province)
  },

  municipalities: () => {
    const province = Session.get('province')
    const municipalities = Provinces.findOne({province:province})

    return municipalities && municipalities.municipality
  },

  currentlySelectedMunicipality: (curr) => {
    const municipality = Session.get('municipality')
    $('#preview-select-municipality').val(municipality)
  },
})