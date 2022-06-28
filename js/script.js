$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
  
    responsive:{
        0:{
            items:1
        },
       
        425:{
            items:2
        },

        768:{
            items:4
        },

        1024:{
            items:5
        }
    }
})