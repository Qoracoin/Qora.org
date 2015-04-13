$(document).ready(function() {

  //SMOOTH ANCHOR
  smoothAnchor();

  //HEADER SLIDESHOW
  $("#header-slideshow").owlCarousel({
    singleItem: true
  });

  //FEATURE DESCRIPTIONS
  $(".feature").mouseenter(function() {
    var desc = $("#feature-description");
    var height = $(desc).height();
    $(desc).html($(this).attr("data-description"));

    $(desc).css('height', 'auto');
    if($(desc).height() < height)
      {
        $(desc).css('height', height);
      }
    });

    //RESOURCE LINKS HEIGHT
    resourceResize();
    $(window).resize(function() {
      resourceResize();
    });

    //OFF CANVAS
    $("#off-canvas-menu").click(function() {
      if($("#off-canvas-menu").attr("menu-open") == "false")
        {
          $("#page").stop().animate({left: "260px"});
          $("#off-canvas-menu").attr("menu-open", "true");
        }
      else
        {
          $("#page").stop().animate({left: "0px"});
          $("#off-canvas-menu").attr("menu-open", "false");
        }
      });
      $("#navigation a").click(function() {
        $("#page").css("left", "0px");
        $("#off-canvas-menu").attr("menu-open", "false");
      });
    });


    function resourceResize()
    {
      if($('html').width() > 360)
        {
          var maxheight = 0;
          $('#resource-links .col').each(function () {
            maxheight = ($(this).height() > maxheight ? $(this).height() : maxheight);
          });
          $('#resource-links .col').height(maxheight);
        }
      else
        {
          $('#resource-links .col').css('height', 'auto');
        }
      }

      function smoothAnchor()
      {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      }
