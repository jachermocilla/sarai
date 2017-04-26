Meteor.YearWeather = {

  constructSeries: (records) => {
    const rain = []
    const temp = []

    records.forEach((element, index) => {
      if (!element.dummy) {
        const rainEntry = []
        const tempEntry = []

        const date = Date.UTC(element.year, element.month - 1, element.day, 0)

        rainEntry.push(date)
        rainEntry.push(element.rain)

        tempEntry.push(date)
        tempEntry.push(element.tempAvg)

        rain.push(rainEntry)
        temp.push(tempEntry)
      }
    })

    return [rain, temp]
  },

  constructChart: (rain, temp) => {

    return {
      rangeSelector: {
        selected: 4
      },

      yAxis: {
        labels: {
          formatter: function () {
            return (this.value > 0 ? ' + ' : '') + this.value + '%';
          }
        },
        plotLines: [{
          value: 0,
          width: 2,
          color: 'silver'
        }]
      },

      plotOptions: {
        series: {
          compare: 'percent',
          showInNavigator: true
        }
      },

      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b>{series.valueSuffix}<br/>',
        valueDecimals: 2,
        split: true
      },

      series: [
        {
          name: 'Rainfall (mm)',
          type: 'spline',
          data: rain,
          color: '#0853a8'
        },
        {
          name: 'Average Temperature (°C)',
          type: 'spline',
          data: temp,
          color: '#ea7c0e'
        }
      ]

    }
  },
}