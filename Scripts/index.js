import { append_cart_item_number } from "../Components/cart_badge.js";
import { user_prof } from "../Components/user_profile.js";
import { navbar } from "../Components/navbar.js";
import { sidebar } from "../Scripts/navbar_des.js";
let navbar_div = document.getElementById("So_navbar");
navbar_div.innerHTML = navbar();

import { footer } from "../Components/footer.js";
let footer_div = document.getElementById("So_footer");
footer_div.innerHTML = footer();

let carousel_div = document.getElementById("So_carousel");

let slideIndex = 1;
let images = [
  "https://www.technologyrecord.com/Portals/0/EasyDNNNews/10405/940443p512EDNmainimg-Unsplash_Burgess-Milner_retail_fashion_web.jpg",
  "https://cdn11.bigcommerce.com/s-8ek7z3h3jn/images/stencil/960w/uploaded_images/expert-resize-1.jpg?t=1661507753",
  "https://boutiqueeventsgroup.com.au/wp-content/uploads/2021/05/Places-to-buy-Best-Wedding-Engagement-Rings-in-New-Zealand-BOUTIQUE.jpg",
  "https://imgsrv2.voi.id/8vvC4gJKi9z13ll-l8wxyDu8h_fNXf33bIPtXFfGVE8/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yMjAzMjYvMjAyMjEwMjAxNzI1LW1haW4uY3JvcHBlZF8xNjY2MjYxNTc4LmpwZw.jpg",
  "https://www.pattersons.co.uk/blog/wp-content/uploads/2019/06/Pattersons-ktichen-1200x480.jpg",
];

let img = document.createElement("img");
img.src = images[0];
carousel_div.append(img);

slideshow();

function slideshow() {
  setInterval(function () {
    if (slideIndex == images.length) {
      slideIndex = 0;
    }
    if (slideIndex < 0) {
      slideIndex = images.length - 1;
    }

    img.src = images[slideIndex];
    carousel_div.append(img);
    slideIndex++;
  }, 3000);
}

let div = document.querySelector("#So_left > button");
div.onclick = () => {
  MinusDivs(-1);
};

let button1 = document.querySelector("So_right > button");
button1.onclick = () => {
  plusDivs(1);
};

function MinusDivs(i) {
  slideIndex = slideIndex - 1 + i;
}
function plusDivs(i) {
  slideIndex = slideIndex - 1 + i;
}
//
append_cart_item_number();
user_prof();
sidebar();
