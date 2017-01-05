FlowRouter.route("/icm-coffee-varieties", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "Varieties"})
		else goHome();
	}
})
