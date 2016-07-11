Template.MainHeader.helpers({
  
  isSuitability: function(){
  	var routeName = FlowRouter.getRouteName();
  	console.log("Current route name is: ", routeName);
    if("SuitabilityMaps"== routeName){
      return true;
    }else{
      return false;
    }
  },
  navAdmin: function(){
		if(Meteor.userId()===null){
			$("#navA").hide();
		}
		else{
			$("#navA").show();
		}
	},

  topHeader: function(){
    //return Home.find({'title': 'Hello World'});
    return Main.find({'name': 'topHeader'}).fetch()[0];
  },

  links: function(){
    var obj = Main.findOne({'name': 'mainHeader'});
    if(typeof obj !== 'undefined'){
      return obj.links;
    }

  },

  mainH: function(){
    var obj = Main.findOne({'name' : 'mainHeader'});
    if(typeof obj !== 'undefined'){
      return obj;
    }
  }

});

Template.MainHeader.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        FlowRouter.go("/pests");
    }
});


LoggedIn = function(){
	if(Meteor.userId()===null){
		return false;
	}
	else{
		return true;
	}
}
