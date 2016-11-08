FlowRouter.route("/ndvi", {
  action: function() {
    BlazeLayout.render("NDVILayout", {main: "NDVI"})
  }
})
