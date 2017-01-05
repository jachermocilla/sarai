Template.CoconutArticle.helpers({
  coconut_article: function(){
  	var obj = ICM.findOne({'name': 'coconut_article'});
    if(typeof obj !== 'undefined'){
      return obj;
    }
  },

  isEnabled: function(){
  	var obj = ICM.findOne({'name': 'coconut_article'});
    if(typeof obj !== 'undefined'){
      return obj.enabled;
    }
  }

});