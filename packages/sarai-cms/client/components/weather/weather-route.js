FlowRouter.route("/admin/weather", {
  triggersEnter: [ isAdminRedirect ],
  action: (params, queryParams) => {
    BlazeLayout.render("CMSLayoutV2", {main: "WeatherCMS"})
  }
})