FlowRouter.route("/pests-submitted", {
	action: function() {
		if(isLoggedIn()==true)
			BlazeLayout.render("CMSLayout", {main: "FormsSubmitted"})
		else goHome();
	}
})
