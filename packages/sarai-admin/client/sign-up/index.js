if (Meteor.isClient)  {  
  Template.SignUp.events({
    'submit form' : function(e) {
      e.preventDefault();

      var username = $(e.target).find('[name=account-username]').val(), 
          password = $(e.target).find('[name=account-password]').val(),
          confirmPassword = $(e.target).find('[name=confirm-account-password]').val(), 
          adminChoice = $(e.target).find('[name=account-admin]').val();

      username = username.replace(/\s/g, "");

      if(checkValidUserName(username) && checkValidPassword(password, confirmPassword)){
        Accounts.createUser({username: username, password : password, adminChoice: adminChoice}, function(err){
        if (err) {
          throwError('Error: ' + err.reason);
        } else { 
          FlowRouter.go("/pests");
        }

        });
      }
      return false;
    }
  });
}


var checkValidUserName = function(username){
  if(username.length >= 3){
    return true;
  }
  else{
    throwError('Error: Username must have 3 or more characters.');
    return false;
  }
}

var checkValidPassword = function(password, confirmPassword){
  if(password.length >= 6){
    if (password == confirmPassword){
      return true;
    }
    else {
      throwError('Error: Password and confirm password are different.');
      return false;
    }
  } else {
    throwError('Error: Password must have 6 or more characters.');
    return false;
  }
}