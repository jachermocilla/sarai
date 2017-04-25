Meteor.YearWeather = {

  constructSeries: (records) => {
    const series = []

    records.forEach((element, index) => {
      if (!element.dummy) {
        const entry = []

        const date = Date.UTC(element.year, element.month - 1, element.day, 0)

        entry.push(date)
        entry.push(element.rain)

        series.push(entry)
      }
    })

    return series
  },

  constructChart: (data) => {

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
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
        valueDecimals: 2,
        split: true
      },

      series: data
    }
  },
}