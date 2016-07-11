Main = new Mongo.Collection('main')

// Main.initEasySearch(['eng_name','fil_name','sci_name','symptoms'], {
//     'limit' : 20,
//     'use' : 'mongo-db'
// });

// Main = new EasySearch.Index({
//   collection: Main,
//   fields: ['eng_name','fil_name','sci_name','symptoms'],
//   engine: new EasySearch.Minimongo()
// });

Main.deny({
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