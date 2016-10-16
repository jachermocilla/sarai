Meteor.Rainfall = {
  fillMissingEntries: (weatherData) => {
    let oneMonthAgo = new Date()
    oneMonthAgo.setDate(oneMonthAgo.getDate() - 30)
    oneMonthAgo.setHours(0,0,0,0)
    console.log(`oneMonthAgo: ${oneMonthAgo}`)

    //Create array to hold the fixed data (full of empty entries first)
    let fixedData = []

    for (let a = 0; a < 30; a++) {
      let d = new Date()
      d.setDate(d.getDate() - (30 - a))
      d.setHours(0,0,0,0)
      const entry = {
        data: {
          rainfall: 0
        },
        dateUTC: d
      }

      fixedData.push(entry)
    }


    let b = 0 //counter for existing data in weatherData array

    for (let a = 0; a < fixedData.length; a++) {
      if (weatherData[b] && fixedData[a].dateUTC.getTime() == weatherData[b].dateUTC.getTime()) {
        //found date match in retrieved weather data

        fixedData[a].data.rainfall = weatherData[b].data.rainfall

        b+=1
      }
    }

    return fixedData
  }
}