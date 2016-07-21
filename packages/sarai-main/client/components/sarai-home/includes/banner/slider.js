Template.Slider.onRendered(() => {

})

Template.Slider.helpers({

  slides: () => {
    const record = Main.findOne({name: 'banner'})

    return record && record.slides
  },

  setSliderIndex: (index, image) => {
    console.log(`index: ${index}, image: ${image}`)
  }
})

// SliderContent Stuff starts here
Template.SliderContent.onRendered(() => {

  $('#main-carousel').slick({
    dots: true,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
  })

})

Template.SliderContent.events({

})

Template.SliderContent.helpers({
  textPosition: () => {
    const record = Main.findOne({name: 'banner'})

    return record && record.textPosition
  },

  positionClasses: (position) => {
    switch(position) {
      case ('left'):
        return {
          class: 'mdl-cell mdl-cell--1-offset-desktop mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--4-col-phone banner-slide-content'
        }
      case ('right'):
        return {
          class: 'mdl-cell mdl-cell--6-offset-desktop mdl-cell--6-col-desktop mdl-cell--4-offset-tablet mdl-cell--4-col-tablet mdl-cell--4-col-phone banner-slide-content'
        }
      default:
        return {
          class: 'mdl-cell mdl-cell--1-offset-desktop mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--4-col-phone banner-slide-content'
        }
    }
  }
})