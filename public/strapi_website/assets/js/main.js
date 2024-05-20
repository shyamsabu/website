jQuery(function() {
    
    $('.sec_2_slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
          {
          breakpoint: 1599,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 4
          }
          },
          {
          breakpoint: 1199,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3
          }
          },
          {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
      ]
      });

    $(window).scroll(function() {
          if ($(document).scrollTop() > 50) {
          $(".site_header").addClass("stick_head");
          } else {
          $(".site_header").removeClass("stick_head");
          }
      });




    $.ajax({
        url: 'http://localhost:1337/api/hdr-and-ftr-section?populate=*',
        method: 'GET',
        success: function(response1) {
            // Access the nested data appropriately
            var log_img = response1.data.attributes.logo.data.attributes.url;
            var email = response1.data.attributes.email;
            var call_num = response1.data.attributes.call_num;
            $('.logo_bx a').append('<img src="http://localhost:1337'+ log_img +'" >');
            $('.call_num').text(call_num);
            $('.info_mail a').text(email);

        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Error: " + textStatus, errorThrown);
        }
    });

    $.ajax({
        url: 'http://localhost:1337/api/main-menus?populate=*',
        method: 'GET',
        success: function(response) {
            var menuItems = response.data[0].attributes.menu;

            menuItems.forEach(menu => {
                var menu_title = menu.title;
                var menu_url = menu.url;
                $(".mainMenu").append('<li id="" class="menu-item  "><a href="http://localhost:1337/' + menu_url + '" aria-current="page">' + menu_title + '</a><ul class="sub-menu abt_sub"></ul><ul class="sub-menu prdct_sub"></ul><ul class="sub-menu resours_sub"></ul></li>');
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Error: " + textStatus, errorThrown);
        }
    });

    $.ajax({
        url: 'http://localhost:1337/api/about-sub-menus?populate=*',
        method: 'GET',
        success: function(response3) {
            var menuItems = response3.data[0].attributes.menu;

            menuItems.forEach(menu => {
                var menu_title = menu.title;
                var menu_url = menu.url;
                $(".abt_sub").append('<li id="" class="menu-item  "><a href="http://localhost:1337/' + menu_url + '" aria-current="page">' + menu_title + '</a></li>');
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Error: " + textStatus, errorThrown);
        }
    });
    $.ajax({
        url: 'http://localhost:1337/api/prdct-sub-menus?populate=*',
        method: 'GET',
        success: function(response4) {
            var menuItems = response4.data[0].attributes.menu;

            menuItems.forEach(menu => {
                var menu_title = menu.title;
                var menu_url = menu.url;
                $(".prdct_sub").append('<li id="" class="menu-item  "><a href="http://localhost:1337/' + menu_url + '" aria-current="page">' + menu_title + '</a></li>');
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Error: " + textStatus, errorThrown);
        }
    });
    $.ajax({
        url: 'http://localhost:1337/api/resourse-sub-menus?populate=*',
        method: 'GET',
        success: function(response5) {
            var menuItems = response5.data[0].attributes.menu;

            menuItems.forEach(menu => {
                var menu_title = menu.title;
                var menu_url = menu.url;
                $(".resours_sub").append('<li id="" class="menu-item  "><a href="http://localhost:1337/' + menu_url + '" aria-current="page">' + menu_title + '</a></li>');
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Error: " + textStatus, errorThrown);
        }
    });
    $.ajax({
        url: 'http://localhost:1337/api/banner-secs?populate=*',
        method: 'GET',
        success: function(response6) {
            var $bnrSlider = $('.bnr_slider');
    
            response6.data.forEach(data => {
                var subText = data.attributes.sub_text;
                var mainText = data.attributes.main_text;
                var bannerBgImg = data.attributes.banner_bg_img.data.attributes.url;
                var bannerLogo = data.attributes.banner_logo.data.attributes.url;
    
                var bannerStructure = `
                    <div class="bnr_slide">
                        <div class="bnr_slide_in" style="background-image: url(http://localhost:1337${bannerBgImg});">
                            <div class="container">
                                <div class="bnr_txt">
                                    <div class="bnr_txt_in">
                                        <div class="bnr_lg">${mainText}</div>
                                        <div class="bnr_pic">
                                            <img src="http://localhost:1337${bannerLogo}" alt="manufacturing in Canada since 2021">
                                        </div>
                                    </div>
                                    <p class="bnr_md">${subText}</p>
                                    <a class="btn btn_lg popup_cta btn_alt" tabindex="-1">REQUEST A QUOTE</a>
                                    <a href="#" class="btn btn_lg" tabindex="-1">VIEW PRODUCTS</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                $bnrSlider.append(bannerStructure);
            });
    
            // Initialize the Slick slider after appending the slides
            $bnrSlider.slick({
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                adaptiveHeight: true
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Error: " + textStatus, errorThrown);
            console.error("Response Text: " + jqXHR.responseText);
        }
    });



    $.ajax({
        url: 'http://localhost:1337/api/sec-header?populate=*',
        method: 'GET',
        success: function(response7) {
           console.log(response7);

           var Custom_sec = response7.data.attributes.Custom_sec; 
           var Custom_sub = response7.data.attributes.Custom_sub;
           var Featured_sec = response7.data.attributes.Featured_sec;

           $('.Custom_sec').text(Custom_sec);
           $('.Custom_sub').text(Custom_sub);
           $('.Featured_sec').text(Featured_sec);

        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Error: " + textStatus, errorThrown);
        }
    });


    $.ajax({
        url: 'http://localhost:1337/api/popular-products?populate=*',
        method: 'GET',
        success: function(response) {
            console.log(response);
    
            response.data.forEach(data => {
                var prd_img = data.attributes.prdct_img.data.attributes.url;
                var img_strctr = '<div class="col-md-4 col-12"><div class="prop_img"><img src="http://localhost:1337' + prd_img + '" alt=""></div></div>';
                console.log(prd_img);
                $('.img_wrap .row').append(img_strctr);
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Error: " + textStatus, errorThrown);
        }
    });
    
    
});