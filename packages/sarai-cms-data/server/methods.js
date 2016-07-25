Meteor.methods({
  'cms-top-header-update': (message, searchText) => {
    Main.update(
      { name: 'topHeader' },
      {
        $set : {
          message,
          searchText
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
  },

  'cms-banner-update': (align, title, text, subtext, buttonText) => {
    const banner = Main.findOne({name: 'banner'}).banners[0]

    Main.update(
      { name: 'banner' },
      {
        $set : {
          banners: [
            {
              img: banner.img,
              align,
              title,
              text,
              subtext,
              buttonText
            }
          ]
        }
      },
      { upsert: true }
    );
  },

  'cms-banner-img-update': (link) => {
    const banner = Main.findOne({name: 'banner'}).banners[0]

    Main.update(
      { name: 'banner' },
      {
        $set : {
          banners: [
            {
              img: link,
              align: banner.align,
              title: banner.title,
              text: banner.text,
              subtext: banner.subtext,
              buttonText: banner.buttonText
            }
          ]
        }
      },
      { upsert: true }
    );
  },

  'cms-header-links-update': (links) => {
    Main.update(
      { name: 'mainHeader'},
      {
        $set: {
          links
        }
      },
      { upsert: true }
    )
  },

  'cms-header-button-toggle': () => {
    let buttonEnabled = Main.findOne({name: 'mainHeader'}).buttonEnabled

    buttonEnabled = buttonEnabled ? false : true

    Main.update(
      { name: 'mainHeader'},
      {
        $set: {
          buttonEnabled
        }
      },
      { upsert: true }
    )
  },

  'cms-banner-slide-add': (_id, image, textPosition, title, subTitle, text, buttonText, buttonLink, rank) => {

    const slides = Main.findOne({name: 'banner'}).slides

    if (slides) {

      slides.push({_id, image, textPosition, title, subTitle, text, buttonText, buttonLink, rank})

      Main.update(
        { name: 'banner'},
        {
          $set: {
            slides
          }
        },
        { upsert: true }
      )
    }

    else {
      return new Error('Couldn\'t find slides array')
    }
  },

  'cms-banner-slide-edit': (_id, image, textPosition, title, subTitle, text, buttonText, buttonLink, rank) => {

    let slides = Main.findOne({name: 'banner'}).slides
    console.log(`_ID: ${_id}`)

    if (slides) {

      const index = slides.find((element, index) => {
        console
        if (element._id == _id) return index
      })

      console.log(`Index: ${index}`)

      slides[index].title = title
      slides[index].textPosition = textPosition
      slides[index].subTitle = subTitle
      slides[index].text = text
      slides[index].buttonText = buttonText
      slides[index].buttonLink = buttonLink
      slides[index].rank = rank

      console.log(slides)
      // Main.update(
      //   { name: 'banner'},
      //   {
      //     $set: {
      //       slides
      //     }
      //   },
      //   { upsert: true }
      // )
    }

    else {
      return new Error('Couldn\'t find slides array')
    }
  },

  'cms-banner-slide-delete': (_id) => {
    const record = Main.findOne({name: 'banner'})

    if (record) {
      let index = 0

      record.slides.forEach((element, i) => {
        if (element._id == _id) {
          index = i
        }
      })

      const slides = record.slides
      slides.splice(index, 1)

      Main.update(
        { name: 'banner'},
        {
          $set: {
            slides
          }
        },
        { upsert: true }
      )
    }
  },

  'cms-aboutbanner-slider-edit': (_id,title, subTitle) => {
    console.log(title + " " + subTitle);

    let banners = About.findOne({name: 'banner'}).banners

    if (banners) {

      banners[0].subtext = title//banner array only contains 1 object because it is not a carousel in the about page
      banners[0].subtext1 = subTitle

      console.log(banners)
       About.update(
         { name: 'banner'},
         {
           $set: {
             banners
           }
         },
         { upsert: true }
       )
    }

    else {
      return new Error('Couldn\'t find banners array')
    }
  },

  'cms-aboutbanner-slider-delete': (_id) => {
    const record = About.findOne({name: 'banner'})

    if (record) {

      const banners = record.banners
      banners.splice(0, 1)

      About.update(
        { name: 'banner'},
        {
          $set: {
            banners
          }
        },
        { upsert: true }
      )
    }
  },

  'cms-about-us-content-update': (title, description) => {
    About.update(
      { name: 'origin' },
      {
        $set : {
          title,
          description
        }
      },
      { upsert: true }
    );
  },

  'cms-about-us-title-update': (text) => {
    About.update(
      { name: 'title' },
      {
        $set : {
          text
        }
      },
      { upsert: true }
    );
  },

  'cms-about-us-projects-update': (title, text1, subtext1, description1, text2, subtext2, description2, text3, subtext3, description3, text4, subtext4, description4, text5, subtext5, description5) => {
    About.update(
      { name: 'projects' },
      {
        $set : {
          title,
          text1,
          subtext1,
          description1,
          text2,
          subtext2,
          description2,
          text3,
          subtext3,
          description3,
          text4,
          subtext4,
          description4,
          text5,
          subtext5,
          description5
        }
      },
      { upsert: true }
    );
  },

  'cms-about-us-leaders-update': (title, author1, subtext1, author2, subtext2, author3, subtext3, author4, subtext4, author5, subtext5) => {
    About.update(
      { name: 'leaders' },
      {
        $set : {
          title,
          author1,
          subtext1,
          author2,
          subtext2,
          author3,
          subtext3,
          author4,
          subtext4,
          author5,
          subtext5
        }
      },
      { upsert: true }
    );
  },

  'cms-about-us-partners-update': (title1, text11, subtext11, description11, text22, subtext22, description22, text33, subtext33, description33, text44, subtext44, description44) => {
    About.update(
      { name: 'partners' },
      {
        $set : {
          title1,
          text11,
          subtext11,
          description11,
          text22,
          subtext22,
          description22,
          text33,
          subtext33,
          description33,
          text44,
          subtext44,
          description44
        }
      },
      { upsert: true }
    );
  }

})