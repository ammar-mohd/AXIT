$(function () {
  "use strict";
  $(window).scroll(function () {
    var navbar = $(".navbar");
    if ($(window).scrollTop() >= navbar.height()) {
      navbar.addClass("sticky-nav");
    } else {
      navbar.removeClass("sticky-nav");
    }
  });

  // Select all links
  const allLinks = document.querySelectorAll(".nav li a");

  // Scrolling function
  function scrollToSections(elements) {
    let headerOffset = 71;
    elements.forEach((element) => {
      let elementPosition = element.getBoundingClientRect().top;
      console.log(elementPosition);
      let offsetPosition = elementPosition + headerOffset;
      element.addEventListener("click", (e) => {
        e.preventDefault();

        // scroll smoothly to the target section
        document.querySelector(e.target.dataset.section).scrollIntoView({
          top: offsetPosition,
          behavior: "smooth",
        });
      });
    });
  }
  scrollToSections(allLinks);

  // Switch tabs
  $(".tab-switch li").click(function () {
    $(this).addClass("selected").siblings().removeClass("selected");

    $(".tabs-section .tabs-content > div").hide();

    $($(this).data("class")).show();
  });
});
