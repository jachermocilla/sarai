Template.TopHeaderOptions.onCreated(function() {

  const handle = Meteor.subscribe('main', 'topHeader');
  // Tracker.autorun(() => {
  //   const isReady = handle.ready();
  //   console.log(`Handle is ${isReady ? 'ready' : 'not ready'}`);
  // });

})

Template.TopHeaderOptions.onRendered(() => {
  $("#target").addClass("is-dirty");
})