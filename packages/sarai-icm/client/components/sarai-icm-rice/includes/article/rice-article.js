Template.RiceArticle.helpers({
  rice_article: function(){
  	var obj = ICM.findOne({'name': 'rice_article'});
    if(typeof obj !== 'undefined'){
      return obj;
    }
  },

  isEnabled: function(){
  	var obj = ICM.findOne({'name': 'rice_article'});
    if(typeof obj !== 'undefined'){
      return obj.enabled;
    }
  }

});