FlowRouter.route("/icm-banana-uri-ng-pananim", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "UriNgPananim"})
		else goHome();
	}
})
