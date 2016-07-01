FlowRouter.route("/pests-spid-update", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("CMSLayout", {main: "SaraiPestsSpidUpdatePage"})
		else goHome();
	}
})
