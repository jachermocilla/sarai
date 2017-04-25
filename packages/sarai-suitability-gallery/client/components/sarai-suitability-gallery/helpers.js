Template.SaraiSuitabilityGallery.helpers({

  regions: () => {
    const regions = Regions.find({}, {sort: {id: 1}}).fetch()

    return regions
  },
  isCurrentRegionAll: () => {
    const region = Session.get('region')
    if (region == "All") {
      return true
    }else{
      return false
    }
  },

  currentlySelectedRegion: (curr) => {
    const region = Session.get('region')
    
    $('#preview-select-region').val(region)
  },

  provinces: () => {
    const region = Session.get('region')
    const provinces = Regions.findOne({region:region})

    return provinces && provinces.province
  },

  currentlySelectedProvince: (curr) => {
    const province = Session.get('province')
    const region = Session.get('region')
    const crop = Session.get('crop')
    
    
    $('#preview-select-province').val(province)

    Meteor.subscribe('suitability-galery', () => {
      let gallery
      if(crop == "All"){
        gallery = SuitabilityGallery.find({province:province}).fetch()
      }else{
        gallery = SuitabilityGallery.find({province:province, crop:crop}).fetch()
      }
      
      // console.log(gallery)
      // $('div.rainfall-heat-map').remove()    //remove any existing chart first
      // $('<div class="rainfall-heat-map">').appendTo('#heat-map-rainfall-container').highcharts(Meteor.RainfallHeatMap.constructHeatMap(municipalities, rain))
    })
  },
  images: (imageCrop) => {
    const province = Session.get('province')
    const crop = Session.get('crop')

    console.log(province)
    console.log(imageCrop)
    
    // Meteor.subscribe('suitability-galery', () => {
    //   console.log(SuitabilityGallery.find({province:province, crop:"Rice"}).fetch())
    //   return SuitabilityGallery.find({province:province, crop:"Rice"}).fetch()
    //   // console.log(gallery)
    //   // return gallery
    // })
    const map = SuitabilityGallery.find({province:province, crop:imageCrop}).fetch()
    console.log(map)
    return map
  
  },

})