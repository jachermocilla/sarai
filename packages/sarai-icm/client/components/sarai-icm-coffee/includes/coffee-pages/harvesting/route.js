FlowRouter.route("/icm-coffee-harvesting", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "Harvesting"})
		else goHome();
	}
})
