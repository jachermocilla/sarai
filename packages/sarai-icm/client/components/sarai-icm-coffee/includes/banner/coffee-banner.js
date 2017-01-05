Template.CoffeeBanner.helpers({
  coffee_banner: function(){
  	var obj = ICM.findOne({'name': 'coffee_banner'});
    if(typeof obj !== 'undefined'){
      return obj;
    }
  },

  isEnabled: function(){
  	var obj = ICM.findOne({'name': 'coffee_banner'});
    if(typeof obj !== 'undefined'){
      return obj.enabled;
    }
  }
});