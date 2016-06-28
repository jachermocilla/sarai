FlowRouter.route("/pests-assistance", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("CMSLayout", {main: "RequestAssistance"})
		else goHome();
	}
})
