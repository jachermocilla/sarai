
Template.Aboutbanner.helpers({
  banner: function(){
  	var obj = About.findOne({'name': 'banner'});
    if(typeof obj !== 'undefined'){
      return obj.banners[0];
    }
  },

  isEnabled: function(){
  	var obj = About.findOne({'name': 'banner'});
    if(typeof obj !== 'undefined'){
      return obj.enabled;
    }
  }
});