FlowRouter.route("/pests-page", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("CMSLayout", {main: "PestPage"})
		else goHome();
	}
})
