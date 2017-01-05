FlowRouter.route("/icm-coffee-preparation", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "Preparation"})
		else goHome();
	}
})
