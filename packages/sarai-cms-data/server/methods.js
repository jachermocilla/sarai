Meteor.methods({
  'cms-top-header-update': (message, searchText) => {
    Main.update(
      { name: 'topHeader' },
      {
        $set : {
          message: message,
          searchText: searchText
        }
      },
      { upsert: true }
    );
  },

  'cms-top-header-toggle': () => {
    const c = Main.findOne({name: 'topHeader'}).enabled
    let n = true
    if (c) {
      n = false
    }

    Main.update(
      { name: 'topHeader' },
      {
        $set : {
          enabled: n
        }
      },
      { upsert: true }
    );

  },

  'cms-header-icon-update': (link) => {
    Main.update(
      { name: 'mainHeader' },
      {
        $set : {
          img: link
        }
      },
      { upsert: true }
    );
  }

})