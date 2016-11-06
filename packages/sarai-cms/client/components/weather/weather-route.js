FlowRouter.route("/admin/weather", {
  triggersEnter: [ isAdminRedirect ],
  action: (params, queryParams) => {
    BlazeLayout.render("CMSLayoutV2", {main: "WeatherCMS"})
  }
})

FlowRouter.route("/admin/weather/stations", {
  triggersEnter: [ isAdminRedirect ],
  action: (params, queryParams) => {
    BlazeLayout.render("CMSLayoutV2", {main: "WeatherStationsCMS"})
  }
})

FlowRouter.route("/admin/weather/stations/:stationID", {
  triggersEnter: [ isAdminRedirect ],
  action: (params, queryParams) => {
    BlazeLayout.render("CMSLayoutV2", {main: "WeatherDataCMS"})
  }
})

