FlowRouter.route("/rainfall", {
  action: function() {
    BlazeLayout.render("MainLayout", {main: "Rainfall"})
  }
})