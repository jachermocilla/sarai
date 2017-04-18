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
     }
});