FlowRouter.route("/advisories", {
  action: function() {
    BlazeLayout.render("MonitoringLayout", {main: "Advisories"})
  }
})