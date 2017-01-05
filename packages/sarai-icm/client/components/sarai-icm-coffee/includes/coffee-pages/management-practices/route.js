FlowRouter.route("/icm-coffee-management", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "Management"})
		else goHome();
	}
})
