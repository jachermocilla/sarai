Meteor.publish('record-counts', (name) => {
  return RecordCounts.find({name})
})


Meteor.publish('cms', function () {
  return CMS.find();
});