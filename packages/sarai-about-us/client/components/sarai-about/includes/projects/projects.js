Template.Projects.helpers({
  project: function(){
    //return Home.find({'title': 'Hello World'});
    return About.findOne({'name': 'projects'});

  }
})