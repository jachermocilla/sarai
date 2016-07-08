FlowRouter.route("/waiss", {
	action: function() {
        BlazeLayout.render("WAISSLayout", {
          main: "WAISSMain"    
        })
	}
})