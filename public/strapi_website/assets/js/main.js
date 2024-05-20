jQuery(function() {
    $('.bnr_slider').slick({
      dots: true,
      infinite : false,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });
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
    const owls = document.querySelectorAll('.owl-item');
    $.ajax({
        url: 'http://localhost:1337/api/banner-secs?populate=*',
        method: 'GET',
        success: function(response6) {
            console.log(response6);

            response6.data.forEach((data,index) => {
                var owlitem = owls[index];
                var sub_text = data.attributes.sub_text;
                var main_text = data.attributes.main_text;
                var banner_bg_img = data.attributes.banner_bg_img.data.attributes.url;
                var banner_logo = data.attributes.banner_logo.data.attributes.url;

                var bnr_strctr = '<div class="bnr_slide"><div class="bnr_slide_in" style="background-image: url(http://localhost:1337' + banner_bg_img + ');"><div class="container"><div class="bnr_txt"><div class="bnr_txt_in"><div class="bnr_lg">' + main_text + '</div><div class="bnr_pic"><img src="http://localhost:1337' + banner_logo + '" alt="manufacturing in Canada since 2021"></div></div><p class="bnr_md">' + sub_text + '</p><a class="btn btn_lg popup_cta btn_alt" tabindex="-1">REQUEST A QUOTE</a><a href="#" class="btn btn_lg" tabindex="-1">VIEW PRODUCTS</a></div></div></div></div></div>'
                $(owlitem).append(bnr_strctr);
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Error: " + textStatus, errorThrown);
        }
    });
});