FlowRouter.route("/rainfall-distribution", {
  action: () => {
    BlazeLayout.render("MapLayout", {main: "RainfallDistribution"})
  }
})

FlowRouter.route("/rainfall-distribution/:stationID", {
  action: (params) => {
    // console.log(params)
    BlazeLayout.render("MapLayout", {main: "RainfallDistribution"})
  }
})