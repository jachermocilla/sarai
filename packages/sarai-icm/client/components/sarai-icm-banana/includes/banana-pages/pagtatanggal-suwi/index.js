isLoggedIn = function(){
	/*if(Meteor.userId()===null){
		console.log(Meteor.userId());
		return false;
	}*/
	/*else{*/
		 return true;
	//}
}

goHome = function(){
	//alert('Not Found!');
	FlowRouter.go('/icm-banana');
	FlowRouter.redirect('/icm-banana');
}
