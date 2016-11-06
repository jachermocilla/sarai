RecordCounts = new Mongo.Collection('record-counts')

RecordCounts.deny({
  insert: function(){
    return true
  },
  update: function() {
    return true
  },
  remove: function() {
    return true
  }
})