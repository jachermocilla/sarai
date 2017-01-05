FlowRouter.route("/icm-corn-pests-and-diseases", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "PestsAndDiseases"})
		else goHome();
	}
})
