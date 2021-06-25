jQuery(document).ready(function(){
//  Slider Water effect    
    "use strict"
    $('.slider').ripples({
        dropRadius: 13,
        perturbance: 0.01,
    });


//  Slider Animation Text
    $('.text').typed({
        strings: ["<strong>I Love</strong><strong class='primary'> Coadings</strong>","<strong>And To</strong> <strong class='primary'>Share !!.</strong>"],
        typeSpeed: 0,
        loop: true,
    });


//  ScrollTop
    $(window).scroll(function(){
        var top = $(window).scrollTop();  
        if(top >= 60){
            $("nav").addClass('secondary');
        }else if($("nav").hasClass('secondary')){
            $("nav").removeClass('secondary');
        }
    });
     
    
    
// Magnific PopUp    
    $('.work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
          }
      });


//  Team-member owlCarousel
      $(document).ready(function() {
        $("#team-members").owlCarousel({
            autoplay: 1000,
            items : 3,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3]
        });   
      }); 


//  About us owlCarousel
      $(".about-us-wrapper").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
    });



//  Frequently Asked Question Section
        const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

        accordionItemHeaders.forEach(accordionItemHeader => {
            accordionItemHeader.addEventListener("click", event =>{
                accordionItemHeader.classList.toggle("active");
                const accordionItemBody = accordionItemHeader.nextElementSibling;
                if(accordionItemHeader.classList.contains("active")){
                    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                }else{
                    accordionItemBody.style.maxHeight = 0;
                }
            });
        });


        $('.counter').counterUp({
            delay: 10,
            time: 2000
          });

});
