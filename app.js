var mSwiper = new Swiper(".mySwiper", {
  loop: true,
  speed: 300,
  effect: "cards",
  cardsEffect: {
    // rotate: 4,
  },
  grabCursor: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    init: function () {
      // Apply initial rotation to the container
      $(".mySwiper").css({
        transform: "rotate(4deg)",
        transition: "all 1.5s ease 0s",
        transformOrigin: "center bottom",
      });
    },
    slideChangeTransitionStart: function () {
      // Reset the rotation on slide change
      $(".mySwiper").css({
        transform: "rotate(-4deg)",
        transition: "all 1.5s ease 0s",
        transformOrigin: "center bottom",
      });

      // Trigger reflow to apply transition on the next frame
      void $(".mySwiper")[0].offsetWidth;

      // Apply rotation with a delay for smooth transition
      $(".mySwiper").css({
        transform: "rotate(0deg)",
        transition: "all 1.5s ease 0s",
        transformOrigin: "center bottom",
      });
    },
  },
});
