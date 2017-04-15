FlowRouter.route("/weather-monitoring-v2", {
  action: () => {
    BlazeLayout.render("MainLayout", {main: "WeatherMonitoringV2"})
  }
})