Template.BananaBanner.helpers({
  banana_banner: function(){
  	var obj = ICM.findOne({'name': 'banana_banner'});
    if(typeof obj !== 'undefined'){
      return obj;
    }
  },

  isEnabled: function(){
  	var obj = ICM.findOne({'name': 'banana_banner'});
    if(typeof obj !== 'undefined'){
      return obj.enabled;
    }
  }
});