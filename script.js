const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar__list");
const search = document.getElementById("btn-search-icon");
const closeSearch = document.getElementById("close-search");
const headerSearch = document.getElementById("search-header");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

if (search) {
  search.addEventListener("click", () => {
    headerSearch.classList.add("active");
  });
}

if (closeSearch) {
  closeSearch.addEventListener("click", () => {
    headerSearch.classList.remove("active");
  });
}

// Slick Slider Image hero-container
$(document).ready(function () {
  $(".hero-container").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    prevArrow:
      "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          infinite: false,
        },
      },
    ],
  });
});

// Slick Slider Image Flash-Sale
$(document).ready(function () {
  $(".flash-sale-content").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    prevArrow:
      "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          infinite: false,
          slidesToShow: 1,
        },
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
        },
        breakpoint: 799,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

//Countdown Flash Sale
const ngay = document.querySelector(".day");
const gio = document.querySelector(".hour");
const phut = document.querySelector(".minute");
const giay = document.querySelector(".second");

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const countDown = () => {
  const countDate = new Date("June 6, 2023 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  ngay.innerHTML = textDay < 10 ? "0" + textDay : textDay;
  gio.innerHTML = textHour < 10 ? "0" + textHour : textHour;
  phut.innerHTML = textMinute < 10 ? "0" + textMinute : textMinute;
  giay.innerHTML = textSecond < 10 ? "0" + textSecond : textSecond;
};

setInterval(countDown, 1000);

