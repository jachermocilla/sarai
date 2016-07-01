FlowRouter.route("/pests-id-update", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("CMSLayout", {main: "SaraiPestsIdUpdatePage"})
		else goHome();
	}
})
