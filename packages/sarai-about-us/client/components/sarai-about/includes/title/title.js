Template.Title.helpers({
  AboutTitle: function(){
    //return Home.find({'title': 'Hello World'});
    return About.findOne({'name': 'title'});
  }
})