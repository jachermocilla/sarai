FlowRouter.route("/icm-cacao-industry", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "CacaoIndustry"})
		else goHome();
	}
})
