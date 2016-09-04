Meteor.methods({

  'cms-service-update': (_id, title, tagline, info, media, col1, col2) => {

    Services.update(
      { _id },
      {
        $set : {
          title,
          tagline,
          info,
          media,
          col1,
          col2
        }
      },
      { upsert: true }
    );
  }

})