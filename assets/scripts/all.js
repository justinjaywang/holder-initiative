document.addEventListener('DOMContentLoaded', function() {

  var init = function() {
    initModal();
    initFilledNav();
    initExternalLinks();
  };

  // modal
  // -----

  var modalToggle = document.querySelector('.modal-toggle'),
    modalShownClass = 'is-modal-open';

  var initModal = function() {
    if (!modalToggle) return;
    modalToggle.addEventListener('click', function(e) {
      e.preventDefault();
      document.body.classList.toggle(modalShownClass);
      return false;
    });
  };

  // filled nav
  // ----------

  var mobileNav = document.querySelector('.nav--mobile'),
    desktopNav = document.querySelector('.nav--desktop'),
    filledNavClass = 'is-filled-nav';

  var initFilledNav = function() {
    if (!mobileNav && !desktopNav) return;
    checkScroll();
    window.onscroll = function() {
      checkScroll();
    };
  };

  var checkScroll = function() {
    if (window.pageYOffset >= 60) {
      document.body.classList.add(filledNavClass);
    } else {
      document.body.classList.remove(filledNavClass);
    }
  };

  // external links
  // --------------

  var initExternalLinks = function() {
    var externalLinks = document.querySelectorAll('a[href^="http://"], a[href^="https://"]');
    externalLinks.forEach(function(el) {
      el.setAttribute('target', '_blank');
    });
  };

  // initialize
  // ----------

  init();

});
