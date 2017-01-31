Meteor.previewHelpers = {
  get30DayRainfall: (records) => {
    let total = 0

    for (let record of records) {
      total += record.data.rainfall
    }

    // records.forEach((element, index) => {
    //   total += element.data.rainfall
    // })

    return (Math.round(total * 10) / 10)
  },

  get7DayForecast: () => {

  },

  formatStationList: (stations) => {
    stations.forEach((element, index) => {
      element.label = element.label.replace('SARAI', '')
      element.label = element.label.replace('(UPLB)', '')
      element.label = element.label.replace('WFP', '')
      element.label = element.label.replace('WPU', '')
      element.label = element.label.replace('APN', '')
      element.label.trim()
    })

    stations.sort((a, b) => {
      return a.label.charCodeAt(0) - b.label.charCodeAt(0)
    })

    return stations
  },

  formatLabel: (label) => {
    const length = 15
    let result = label

    if (label.length > 20) {
      result = `${result.substring(0, length)}...`
    } else {
      const labelLength = result.length

      while (result.length < length) {
        result += ' '
      }
    }

    return result
  }
}