Meteor.publish('record-counts', (name) => {
  return RecordCounts.find({name})
})