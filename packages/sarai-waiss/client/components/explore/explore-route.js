FlowRouter.route("/waiss/explore", {
	action: function() {
        BlazeLayout.render("WAISSLayout", {
          main: "WAISSExplore"    
        })
	}
})