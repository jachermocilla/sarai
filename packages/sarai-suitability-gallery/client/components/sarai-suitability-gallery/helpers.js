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

  isNA: (value) => {
    if (value == "NA") {
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
      
    })
  },
  images: (imageCrop) => {
    const province = Session.get('province')
    const crop = Session.get('crop')

    const map = SuitabilityGallery.find({province:province, crop:imageCrop}).fetch()
 
    return map
  
  },

})