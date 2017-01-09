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
<<<<<<< 0b303db1542022d7bef296b172a7f6850c420496
<<<<<<< db011ef3f21ff019438d32f138866499db71fb7e
=======
>>>>>>> Cleaned up rainfall preview a bit
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
<<<<<<< 0b303db1542022d7bef296b172a7f6850c420496
=======
>>>>>>> Started on BOM style weather preview on main page
=======
>>>>>>> Cleaned up rainfall preview a bit
  }
}