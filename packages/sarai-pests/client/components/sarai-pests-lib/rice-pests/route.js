FlowRouter.route("/rice-pests", {
	action: function() {
		BlazeLayout.render("MainLayout", {main: "SaraiRicePests"})
	}
})