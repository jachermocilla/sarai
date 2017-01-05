FlowRouter.route("/icm-coffee", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "ICMCoffee"})
		else goHome();
	}
})
