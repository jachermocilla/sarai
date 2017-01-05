Template.CornBanner.helpers({
  corn_banner: function(){
  	var obj = ICM.findOne({'name': 'corn_banner'});
    if(typeof obj !== 'undefined'){
      return obj;
    }
  },

  isEnabled: function(){
  	var obj = ICM.findOne({'name': 'corn_banner'});
    if(typeof obj !== 'undefined'){
      return obj.enabled;
    }
  }
});