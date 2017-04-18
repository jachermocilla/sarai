FlowRouter.route("/suitability-gallery", {
  action: function() {
    BlazeLayout.render("MainLayout", {main: "SaraiSuitabilityGallery"})
  }
})