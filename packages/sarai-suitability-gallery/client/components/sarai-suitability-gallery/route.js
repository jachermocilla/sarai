FlowRouter.route("/suitability-gallery", {
  action: function() {
    BlazeLayout.render("MonitoringLayout", {main: "SaraiSuitabilityGallery"})
  }
})