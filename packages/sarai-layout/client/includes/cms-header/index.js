Template.CMSHeader.helpers({
  navAdmin: function(){
		if(Meteor.userId()===null){
			$("#navA").hide();
		}
		else{
			$("#navA").show();
		}
	}
});