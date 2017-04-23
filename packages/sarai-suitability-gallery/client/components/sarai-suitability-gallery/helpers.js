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
    $('#preview-select-province').val(province)
  }
})