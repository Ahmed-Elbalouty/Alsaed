(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000, "linear");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Clients Carousel
  $(".projects-carousel").owlCarousel({
    autoplay: true,
    rtl: true,
    smartSpeed: 1000,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1.5,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
  $(document).on("click", function (e) {
    if (window.innerWidth < 992) {
      var $dropdown = $(".nav-item.dropdown");
      var $menu = $dropdown.find(".dropdown-menu");
      var $toggle = $dropdown.find(".dropdown-toggle");

      // If click is outside the dropdown
      if (!$dropdown.is(e.target) && $dropdown.has(e.target).length === 0) {
        if ($menu.hasClass("show")) {
          const bsDropdown =
            bootstrap.Dropdown.getInstance($toggle[0]) ||
            new bootstrap.Dropdown($toggle[0]);
          bsDropdown.hide();
        }
      }
    }
  });

  // Active navbar link
  var currentPage = window.location.pathname.split("/").pop().toLowerCase(); // e.g., "services.html" or "projects.html"

  $(".navbar-nav .nav-link").each(function () {
    var linkPage = $(this).attr("href").toLowerCase();

    // activate "Services" link if on services.html or projects.html
    if (
      (currentPage === "services.html" || currentPage === "projects.html") &&
      linkPage === "#"
    ) {
      $(".navbar-nav .nav-link").removeClass("active");
      $(this).addClass("active");
    }

    // exact match
    if (linkPage === currentPage) {
      $(".navbar-nav .nav-link").removeClass("active");
      $(this).addClass("active");
    }
  });

  // Why Us toggle
  $(".why-question").on("click", function () {
    var $icon = $(this).find(".why-icon");
    var $answer = $(this).next(".why-answer");

    // Close all others first
    $(".why-answer").not($answer).slideUp();
    $(".why-icon").not($icon).text("+");

    // Toggle current
    $answer.slideToggle();
    $icon.text($icon.text() === "+" ? "−" : "+");
  });
})(jQuery);

// Carousel played on hover
function carouselHover(element, hover) {
  var carousel = element.querySelector(".carousel");
  if (hover) {
    $(carousel).carousel("cycle");
  } else {
    $(carousel).carousel("cycle");
  }
}
