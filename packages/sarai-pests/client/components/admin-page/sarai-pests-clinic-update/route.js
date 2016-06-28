FlowRouter.route("/pests-update", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("CMSLayout", {main: "SaraiPestsUpdatePage"})
		else goHome();
	}
})
