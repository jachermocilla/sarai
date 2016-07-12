Meteor.methods({
	'updateAccountType': function(accountType){
		Meteor.users.update(Meteor.userId(), {$set: {"profile.accountType": accountType}});
	}
})


