Template.carousel.onRendered(() => {
  $('#main-carousel').slick({
    dots: true,
    arrows: false
  })
})

Template.carousel.helpers({

  sliderEntries: () => {
    return [
      {
        img: '/upload/.uploads/main/banana_banner.jpg',
        textPosition: 'lower-left',
        title: 'SMARTER CROP MANAGEMENT',
        subTitle: 'Helping farmers to produce more with less',
        text: '<p>Know the right amount of nutrient, the adequate management practices for pest and diseases, and the right amount of water for maximum yield.<p>',
        buttonText: 'Know More',
        buttonLink: '/'
      },
      {
        img: '/upload/.uploads/main/cacao_banner.jpg',
        textPosition: 'lower-left',
        title: 'SMARTER CROP MANAGEMENT',
        subTitle: 'Helping farmers to produce more with less',
        text: '<p>Know the right amount of nutrient, the adequate management practices for pest and diseases, and the right amount of water for maximum yield.<p>',
        buttonText: 'Know More',
        buttonLink: '/'
      },
      {
        img: '/upload/.uploads/main/coconut_banner.jpg',
        textPosition: 'lower-left',
        title: 'SMARTER CROP MANAGEMENT',
        subTitle: 'Helping farmers to produce more with less',
        text: '<p>Know the right amount of nutrient, the adequate management practices for pest and diseases, and the right amount of water for maximum yield.<p>',
        buttonText: 'Know More',
        buttonLink: '/'
      },
    ]
  }
})