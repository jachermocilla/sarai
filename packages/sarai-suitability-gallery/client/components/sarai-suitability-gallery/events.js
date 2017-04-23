Template.SaraiSuitabilityGallery.events({
    'click .filter-button' : function (e){
        var value = e.target.attributes[1].nodeValue;
        console.log(e);
        console.log(e.target.attributes[1].nodeValue);
        // console.log(e.target.attributes[1]);
        console.log("VALUE: "+value);
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }

        if ($(".filter-button").removeClass("active")) {
            $(e).removeClass("active");
        }
        $(e).addClass("active");       
     },

     // 'click .pop' : function (e){
     //    $('.imagepreview').attr('src', $(e).find('img').attr('src'));
     //    $('#imagemodal').modal('show');   
     // } 
     'change #preview-select-region': (e) => {
        const region = e.currentTarget.value
        Session.set('region', region)
        let province
        if(region == "All"){
            province = Regions.findOne({region:region}).province[0]    
        }else{
            province = Regions.findOne({region:region}).province[1]
        }

        

        // sets province to first province in the chosen region 
        Session.set('province',Regions.findOne({region:region}).province)


      },
      
      'change #preview-select-province': (e) => {
        const province = e.currentTarget.value
        Session.set('province', province)

        // sets municipality to first municipality in the chosen province 
        // Session.set('municipality',Provinces.findOne({province:province}).municipality[0])
      },
});