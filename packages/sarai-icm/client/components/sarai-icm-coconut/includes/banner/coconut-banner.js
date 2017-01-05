Template.CoconutBanner.helpers({
  coconut_banner: function(){
  	var obj = ICM.findOne({'name': 'coconut_banner'});
    if(typeof obj !== 'undefined'){
      return obj;
    }
  },

  isEnabled: function(){
  	var obj = ICM.findOne({'name': 'coconut_banner'});
    if(typeof obj !== 'undefined'){
      return obj.enabled;
    }
  }
});