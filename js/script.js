var slide3 = document.querySelectorAll(
  '.cards .box:nth-child(3) ul:last-of-type li'
);
let img = document.querySelectorAll('.cards .box:nth-child(3) img');

slide3.forEach((slide, slideKey) => {
  slide.addEventListener('click', function () {
    img.forEach((item, key) => {
      item.classList.remove('active');
      // slide.classList.remove("active")
      if (slideKey == key) {
        item.classList.add('active');
        slide3.forEach((item) => {
          item.classList.remove('active');
          slide.classList.add('active');
        });
      }
    });
  });
});
