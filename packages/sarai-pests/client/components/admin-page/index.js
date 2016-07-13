/*isLoggedIn = function(){
	if (Meteor.userId() === null){
		return false;
	} else {
		console.log("meron " + Meteor.user());
		return Meteor.user().profile.accountType == accountType? true : false;
		return true;
	}
	
}

goHome = function(){
	FlowRouter.go('/pests');
	FlowRouter.redirect('/pests');
}*/

Template.registerHelper("isAuthorized", function(privilege){
	if(!(Meteor.userId() && _.intersection(Meteor.user().profile.role, Privilege.findOne({name: privilege}).authorized).length > 0))
		FlowRouter.go("/pests");
});