if (Meteor.isServer) {
  Meteor.publish('main', function (name) {
    return Main.find({name: name})
  });
}
