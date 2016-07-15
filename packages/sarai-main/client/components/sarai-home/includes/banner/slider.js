Template.carousel.onRendered(() => {
  // div_img.Style.Add("background-image", "url('" + "../emp_pic/" & myDataSet.Tables(0).Rows(0).ItemArray(29).ToString() + "')")

  const slides = [
      {
        image: '/upload/.uploads/main/banana_banner.jpg',
        textPosition: 'lower-left',
        title: 'SMARTER CROP MANAGEMENT',
        subTitle: 'Helping farmers to produce more with less',
        text: '<p>Know the right amount of nutrient, the adequate management practices for pest and diseases, and the right amount of water for maximum yield.<p>',
        buttonText: 'Know More',
        buttonLink: '/',
        rank: 1
      },
      {
        image: '/upload/.uploads/main/cacao_banner.jpg',
        textPosition: 'lower-left',
        title: 'Second Slide',
        subTitle: 'Helping farmers to produce more with less',
        text: '<p>Know the right amount of nutrient, the adequate management practices for pest and diseases, and the right amount of water for maximum yield.<p>',
        buttonText: 'Know More',
        buttonLink: '/sample',
        rank: 2
      },
      {
        image: '/upload/.uploads/main/coconut_banner.jpg',
        textPosition: 'lower-left',
        title: 'Third Slide',
        subTitle: 'Helping farmers to produce more with less',
        text: '<p>Know the right amount of nutrient, the adequate management practices for pest and diseases, and the right amount of water for maximum yield.<p>',
        buttonText: 'Know More',
        buttonLink: '/',
        rank: 3
      },
    ]

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
    return [
      {
        image: '/upload/.uploads/main/banana_banner.jpg',
        textPosition: 'lower-left',
        title: 'SMARTER CROP MANAGEMENT',
        subTitle: 'Helping farmers to produce more with less',
        text: '<p>Know the right amount of nutrient, the adequate management practices for pest and diseases, and the right amount of water for maximum yield.<p>',
        buttonText: 'Know More',
        buttonLink: '/',
        rank: 1
      },
      {
        image: '/upload/.uploads/main/cacao_banner.jpg',
        textPosition: 'lower-left',
        title: 'Second Slide',
        subTitle: 'Helping farmers to produce more with less',
        text: '<p>Know the right amount of nutrient, the adequate management practices for pest and diseases, and the right amount of water for maximum yield.<p>',
        buttonText: 'Know More',
        buttonLink: '/',
        rank: 2
      },
      {
        image: '/upload/.uploads/main/coconut_banner.jpg',
        textPosition: 'lower-left',
        title: 'Third Slide',
        subTitle: 'Helping farmers to produce more with less',
        text: '<p>Know the right amount of nutrient, the adequate management practices for pest and diseases, and the right amount of water for maximum yield.<p>',
        buttonText: 'Know More',
        buttonLink: '/',
        rank: 3
      },
    ]
  }
})