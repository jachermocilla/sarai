Template.Videos.helpers({
  video: function(){
    return About.findOne({'name': 'videos'});
  }
})