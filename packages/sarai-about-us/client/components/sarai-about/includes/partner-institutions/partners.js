Template.Partners.helpers({
  partner: function(){
    //return Home.find({'title': 'Hello World'});
    return About.findOne({'name': 'partners'});

  }
})