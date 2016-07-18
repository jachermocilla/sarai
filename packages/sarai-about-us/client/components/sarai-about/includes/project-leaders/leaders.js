Template.Leaders.helpers({
  leader: function(){
    //return Home.find({'title': 'Hello World'});
    return About.findOne({'name': 'leaders'});
  }
})