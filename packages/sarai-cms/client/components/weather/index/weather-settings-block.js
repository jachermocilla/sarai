Template.WeatherSettingsBlock.onCreated(() => {
  Meteor.subscribe('dss-settings')
})

Template.WeatherSettingsBlock.onRendered(() => {
  $('#cms-weather-wu-key').addClass('is-dirty')
})

Template.WeatherSettingsBlock.helpers({
  wundergroundKey: () => {
    const record = DSSSettings.findOne({name: 'wunderground-api-key'})

    return record && record.value
  }
})