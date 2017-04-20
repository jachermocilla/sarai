FlowRouter.route("/", {
  action: function() {
    BlazeLayout.render("MainLayout", {main: "SaraiHome"})
  }
})

FlowRouter.route("/heat-map-rainfall-outlook", {
  action: function() {
    BlazeLayout.render("MainLayout", {main: "HeatMapRainfallOutlook"})
  }
})