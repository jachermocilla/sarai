FlowRouter.route("/icm-banana-pagtatanggal-suwi", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "PagtatanggalSuwi"})
		else goHome();
	}
})
