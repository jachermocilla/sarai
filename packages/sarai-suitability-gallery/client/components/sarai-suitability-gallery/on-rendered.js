Template.SaraiSuitabilityGallery.onRendered(() => {
  const region = Session.get('region')
  $('#preview-select-region').val(region)

  const province = Session.get('province')
  $('#preview-select-province').val(province)
})