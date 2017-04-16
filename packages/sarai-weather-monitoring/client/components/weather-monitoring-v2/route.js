FlowRouter.route("/weather-monitoring", {
  action: () => {
    BlazeLayout.render("MainLayout", {main: "WeatherMonitoringV2"})
  }
})