FlowRouter.route("/icm-coffee-pest-management", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "PestManagement"})
		else goHome();
	}
})
