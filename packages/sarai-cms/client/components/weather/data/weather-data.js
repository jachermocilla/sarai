Template.WeatherDataCMS.onCreated(() => {
  this.stationID = FlowRouter.current().params.stationID
  Meteor.subscribe('weather-data-30-by-id', this.stationID )
  Meteor.subscribe('weather-station', this.stationID)
})

Template.WeatherDataCMS.onRendered(() => {
  initDialog('cms-weather-data-dialog')

})

Template.WeatherDataCMS.helpers({
  stationID: () => {
    return this.stationID
  },

  label: () => {
    const record = WeatherStations.findOne({})

    return record && record.label
  },

  records: () => {
    const records = WeatherData.find({})

    return records
  }
})

Template.WeatherDataCMS.events({
  'click .edit.action': () => {
    console.log(this)
    const dialog = document.querySelector(`#cms-weather-data-dialog`)

    dialog.showModal()
  }
})

const initDialog = (dialogID) => {
  const dialog = document.querySelector(`#${dialogID}`)

  dialog.querySelector('.cancel').addEventListener('click', () => {
    dialog.close()
  })

  dialog.querySelector('.save').addEventListener('save', () => {
    console.log('Saving...')
    dialog.close()
  })
}