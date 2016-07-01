FlowRouter.route("/pests-clinic-update", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("CMSLayout", {main: "SaraiPestsUpdatePage"})
		else goHome();
	}
})
