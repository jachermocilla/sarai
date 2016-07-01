FlowRouter.route("/pests-lib-update", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("CMSLayout", {main: "SaraiPestsLibUpdatePage"})
		else goHome();
	}
})
