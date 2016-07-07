Meteor.methods({

	'insertIntoReport': function(title, body, image, location){
			Report.insert({
				date: moment().format('MMMM Do YYYY, h:mm:ss a'),
				title: title,
				body: body,
				image: image,
				location: location,
				user: Meteor.userId()
			});	
	}
	
})


