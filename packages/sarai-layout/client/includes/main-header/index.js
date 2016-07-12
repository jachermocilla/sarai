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

  mainLinks: function(){
    var obj = Main.findOne({'name': 'mainHeader'});
    if (obj) {
      console.log(obj.links)
    }
    return obj && obj.links
  },

  mainH: function(){
    var obj = Main.findOne({'name' : 'mainHeader'});
    if(typeof obj !== 'undefined'){
      return obj;
    }
  },

  hasSubLinks: (mainLink) => {
    if (mainLink.links && mainLink.links.length > 0) {
      return true
    } else {
      return false
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
