Template.Story.helpers({
  story: function(){
    //return Home.find({'title': 'Hello World'});
    return About.findOne({'name': 'origin'});
  }
})