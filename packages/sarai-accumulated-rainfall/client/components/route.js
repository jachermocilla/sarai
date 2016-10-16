FlowRouter.route("/accumulated-rainfall", {
  action: () => {
    BlazeLayout.render("MapLayout", {main: "AccumulatedRainfall"})
  }
})

FlowRouter.route("/accumulated-rainfall/:stationID", {
  action: (params) => {
    // console.log(params)
    BlazeLayout.render("MapLayout", {main: "AccumulatedRainfall"})
  }
})