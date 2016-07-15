Template.carousel.onRendered(() => {
  let slides = []

  const banner = Main.findOne({name: 'banner'})
  if (banner) {
    slides = banner.slides
    console.log('slides found')
  }

  slides.forEach((element, index, array) => {
    const slide = $(`#banner-slider-${index}`)
    // console.log(slide)
    const content = $(`#banner-slider-${index} > .banner-slider-content`)
    const button = $(`#banner-slider-${index} button`)

    let marginTop = '10%'
    let marginLeft = '10%'

    switch(element.textPosition) {
      case ('lower-left'):

        break;

      default:
        break;
    }

    slide.css({
      'background-image': 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(' + element.image + ')',
      'background-size': 'cover'
    })

    content.css({
      'margin-top': marginTop,
      'margin-left': marginLeft
    })

    button.on('click', () => {
      FlowRouter.go(element.buttonLink)
    })

  })

  $('#main-carousel').slick({
    dots: true,
    arrows: false
  })
})


Template.carousel.helpers({

  slides: () => {
    const record = Main.findOne({name: 'banner'})

    return record && record.slides
  }
})