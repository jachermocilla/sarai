FlowRouter.route("/icm-banana-layouting", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "Layouting"})
		else goHome();
	}
})
