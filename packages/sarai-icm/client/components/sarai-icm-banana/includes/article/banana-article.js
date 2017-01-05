Template.BananaArticle.helpers({
  banana_article: function(){
  	var obj = ICM.findOne({'name': 'banana_article'});
    if(typeof obj !== 'undefined'){
      return obj;
    }
  },

  isEnabled: function(){
  	var obj = ICM.findOne({'name': 'banana_article'});
    if(typeof obj !== 'undefined'){
      return obj.enabled;
    }
  }

});