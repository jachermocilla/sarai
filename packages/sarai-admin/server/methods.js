Meteor.methods({
	insertAdmin: function(userId) {
		var self = this
		Admin.checkAdmin(self.userId)
		check(userId, String)
		var admin = Admin.findOne({userId: userId})
		if (!admin) return Admin.insert({userId: userId})
		else return admin.userId
	},
	removeAdmin: function(userId) {
		var self = this
		Admin.checkAdmin(self.userId)
		check(userId, String)
		return Admin.remove({userId: userId})
	}
})


