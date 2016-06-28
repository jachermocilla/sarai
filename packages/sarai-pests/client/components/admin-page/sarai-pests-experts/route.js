FlowRouter.route("/pests-addExpert", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("CMSLayout", {main: "ExpertPage"})
		else{
			FlowRouter.go('/pests-clinic');
			FlowRouter.redirect('/pests-clinic');
		}
	}
})
