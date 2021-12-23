window.addEventListener("load", function () {
  const funcSlider = function (
    selectorWrapper,
    selectorGallery,
    selectorPrev,
    selectorNext
  ) {
    const slider = document.querySelector(selectorWrapper),
      gallery = document.querySelector(selectorGallery);
    if (!slider) return;

    const list = slider.querySelectorAll("ul > li");

    if (!list || list.length == 0) return;

    const first = list[0];
    console.dir(list[0]);
    let firstWidth = first.clientWidth;

    const firstStyles = window.getComputedStyle(first);
    const firstMl = parseInt(firstStyles.marginLeft);
    const firstMr = parseInt(firstStyles.marginRight);
    firstWidth += firstMl + firstMr;

    const next = function (direction) {
      let ml = 0;
      ml = Math.abs(parseInt(first.style.marginLeft)) || 0;

      if (direction == "prev") {
        if (ml < gallery.scrollWidth + list[0].scrollWidth * 5)
          ml += firstWidth;
      } else {
        ml -= firstWidth;
      }

      first.style.marginLeft = `-${ml}px`;

      console.log(
        first.style.marginLeft,
        ml,
        gallery.scrollWidth,
        list[0].scrollWidth
      );
    };

    const btnPrev = slider.querySelector(selectorPrev);
    const btnNext = slider.querySelector(selectorNext);

    if (btnNext && btnPrev) {
      btnPrev.addEventListener("click", function () {
        next("prev");
      });

      btnNext.addEventListener("click", function () {
        next();
      });
    }
  };

  funcSlider(".slide-wrapper", ".slide-img", ".slide-left", ".slide-right");
});
