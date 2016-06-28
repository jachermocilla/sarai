FlowRouter.route("/pests-create-report", {
	action: function() {
		if(isLoggedIn()==true)	
			BlazeLayout.render("CMSLayout", {main: "SaraiPestsCreateReport"})
		else goHome();
	}
})
