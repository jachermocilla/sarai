Template.SaraiPestsCreateReport.helpers({
	IsLoggedIn: function(){
		if(Meteor.userId()===null){
			FlowRouter.go('/pests-clinic');
			FlowRouter.redirect('/pests-clinic');
		}
		else{
			 return true;
		}
	}
});

Template.SaraiPestsCreateReport.events({
	'click #submitReport': function(){
		
		var title = $("#reptitle").val().trim();
		var body = $("#body").val().trim();	
		
		Meteor.call('insertIntoReport', title, body);
		
		 $("#reptitle").val('');
		 $("#body").val('');
		
		alert('Submitted');
		
	}
});
