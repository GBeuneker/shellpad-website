(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  /* ==================== NAVBAR ==================== */

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  /* ==================== MODALS ==================== */
  $('.portfolio-item').magnificPopup({
    modal: true
  });

  $('.portfolio-item').on('mfpOpen', openModal);
  $('.portfolio-item').on('mfpClose', dismissModal);

  // Open Modal
  function openModal(e) {
    e.preventDefault();
    window.location.href = "#modal";
  }

  // Dismiss and close Modal
  function dismissModal(e) {
    if (window.location.toString().indexOf('#modal') >= 0)
      window.history.back(); // Trigger the back button
    e.preventDefault();
  }

  // Close Modal
  function closeModal(e) {
    e.preventDefault();
    $.magnificPopup.close();
  }

  // Modal dismiss click event
  $(document).on('click', '.portfolio-modal-dismiss', closeModal);

  // Front/back button event
  $(window).on('popstate', function (e) {
    // Only if the window location doesn't contain #modal
    if (window.location.toString().indexOf('#modal') == -1)
      closeModal(e);
  });

  /* ==================== CONTACT FORM ==================== */
  // Floating label headings for the contact form
  $(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict
