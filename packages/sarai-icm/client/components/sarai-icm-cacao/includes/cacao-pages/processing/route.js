FlowRouter.route("/icm-cacao-processing", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "CacaoProcessing"})
		else goHome();
	}
})
