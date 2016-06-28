Template.SaraiPestsLabResultForm.helpers({
	
	IsLoggedIn: function(){
		if(isLoggedIn()==true) return true;
		else goHome();
	}

});
