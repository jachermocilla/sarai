if (Meteor.isClient)  {
  Template.SignIn.events({
    'submit form' : function(e) {
      e.preventDefault();
      var username = $(e.target).find('[name=login-username]').val(), 
          password = $(e.target).find('[name=login-password]').val();

      username = username.replace(/\s/g, "");

      Meteor.loginWithPassword(username, password, function(err){
        if (err){
          throwError('Error: ' + err.reason);
        }
        else{
          FlowRouter.go("/pests");
        }
      });

      return false;
    }
  });
}
