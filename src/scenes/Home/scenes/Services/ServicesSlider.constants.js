export const SLIDER_OPTIONS = {
  slidesToShow: 2,
  slidesToScroll: 2,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true
      }
    }
  ]
};
