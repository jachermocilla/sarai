FlowRouter.route("/icm-banana-pangangalaga-bunga", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "PangangalagaBunga"})
		else goHome();
	}
})
