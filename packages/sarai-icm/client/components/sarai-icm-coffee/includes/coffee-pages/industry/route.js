FlowRouter.route("/icm-coffee-industry", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "Industry"})
		else goHome();
	}
})
