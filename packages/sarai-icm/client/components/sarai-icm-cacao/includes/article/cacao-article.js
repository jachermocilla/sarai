Template.CacaoArticle.helpers({
  cacao_article: function(){
  	var obj = ICM.findOne({'name': 'cacao_article'});
    if(typeof obj !== 'undefined'){
      return obj;
    }
  },

  isEnabled: function(){
  	var obj = ICM.findOne({'name': 'cacao_article'});
    if(typeof obj !== 'undefined'){
      return obj.enabled;
    }
  }

});