if (Meteor.isClient)  {  
	Errors = new Mongo.Collection(null);

	throwError = function(message) {
		Errors.insert({message: message});
	};

	Template.ErrorList.helpers({
		ErrorList: function() {
			return Errors.find();
		}
	});

	Template.Error.onRendered(function() {
		var error = this.data;
		Meteor.setTimeout(function () {
			Errors.remove(error._id);
		}, 3000);
	});
}