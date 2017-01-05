Template.RiceBanner.helpers({
  rice_banner: function(){
  	var obj = ICM.findOne({'name': 'rice_banner'});
    if(typeof obj !== 'undefined'){
      return obj;
    }
  },

  isEnabled: function(){
  	var obj = ICM.findOne({'name': 'rice_banner'});
    if(typeof obj !== 'undefined'){
      return obj.enabled;
    }
  }
});