FlowRouter.route("/icm-banana-pangangasiwa", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "Pangangasiwa"})
		else goHome();
	}
})
