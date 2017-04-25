Meteor.methods({

  'get30DayCumulativeRainfall2': (id) => {
    console.log(this)

    const records = RainfallDistributionData.find({id})

    console.log(records)
  },



})