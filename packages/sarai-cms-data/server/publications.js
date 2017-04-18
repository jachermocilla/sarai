Meteor.publish('record-counts', (name) => {
  return RecordCounts.find({name})
})

Meteor.publish('cms', (name) => {
  return CMS.find({name})
})