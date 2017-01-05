Template.CoffeeArticle.helpers({
  coffee_article: function(){
  	var obj = ICM.findOne({'name': 'coffee_article'});
    if(typeof obj !== 'undefined'){
      return obj;
    }
  },

  isEnabled: function(){
  	var obj = ICM.findOne({'name': 'coffee_article'});
    if(typeof obj !== 'undefined'){
      return obj.enabled;
    }
  }

});