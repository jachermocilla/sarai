Template.CacaoBanner.helpers({
  cacao_banner: function(){
  	var obj = ICM.findOne({'name': 'cacao_banner'});
    if(typeof obj !== 'undefined'){
      return obj;
    }
  },

  isEnabled: function(){
  	var obj = ICM.findOne({'name': 'cacao_banner'});
    if(typeof obj !== 'undefined'){
      return obj.enabled;
    }
  }
});