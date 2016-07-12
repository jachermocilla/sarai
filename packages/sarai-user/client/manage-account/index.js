Template.ManageAccount.helpers({
  accountTypes: function(){
    // retrieve account types
    return ["Registered", "Pest Library Admin", "Pest Identification Admin", "Pest Monitor Admin", "Pest Clinic Admin", "Super Admin"];
  },
  checkCurrentAccountType: function(){
    return this == Meteor.user().profile.accountType;
  },
  markCurrentAccountType: function(){
    if (this == Meteor.user().profile.accountType)
      return "font-weight: bold";
  }
})

Template.ManageAccount.events({
  'submit form' : function(e) {
    e.preventDefault();

    var accountType = $(e.target).find('[id=accountType]').val();
    if (accountType != Meteor.user().profile.accountType){
      Meteor.call('updateAccountType', accountType);
      alert("Request for account updates was successfully submitted to Super Admin.");
    }

    history.back();
  },
  'click #cancel': function(e){
    e.preventDefault();
    history.back();
  },
  'click #delete-account': function(e){
    e.preventDefault();
    if (confirm("Are you sure you want to delete your account?")){
      alert("Request for account updates was successfully submitted to Super Admin.");
      history.back();
    }
  }
});


