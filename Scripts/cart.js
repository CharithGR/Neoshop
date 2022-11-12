import { navbar } from "../Components/navbar.js";
let navbar_div = document.getElementById("Son_navbar");
navbar_div.innerHTML = navbar();
import { user_prof } from "../Components/user_profile.js";
import { footer } from "../Components/footer.js";
import { append_cart_item_number } from "../Components/cart_badge.js";
append_cart_item_number();
let footer_div = document.getElementById("Sn_footer");
footer_div.innerHTML = footer();

let data = JSON.parse(localStorage.getItem("Cart")) || [];

let hari_cart_details = JSON.parse(localStorage.getItem("Cart"));
let empty_cart_msg = document.querySelector("#empty_cart_message");
if (hari_cart_details === null || hari_cart_details.length === 0) {
  empty_cart_msg.style.display = "block";
} else {
  empty_cart_msg.style.display = "none";
}

data.forEach((ele, i) => {
  let So_container_div = document.createElement("div");
  So_container_div.setAttribute("id", "So_container1");

  let image_div = document.createElement("div");

  let image = document.createElement("img");
  image.className = "imge";
  image.src = ele.images;
  image_div.append(image);

  let title_div = document.createElement("div");

  let h2 = document.createElement("h2");
  h2.innerText = ele.subtitle;

  let p1 = document.createElement("p");
  p1.innerText = `Size: ${ele.size[0]}`;

  let no_of_products_div = document.createElement("div");
  no_of_products_div.setAttribute("id", "So_no_of_products");
  let plus = document.createElement("button");
  plus.innerHTML = "+";

  let no_of_products = document.createElement("button");
  no_of_products.innerHTML = data.length;

  let minus = document.createElement("button");
  minus.innerHTML = "-";

  plus.onclick = () => {
    data.length++;
    if (data.length > 5) {
      data.length--;
      alert("You cannot buy more than 5 products for this Product");
    }
    no_of_products.innerHTML = data.length;
    show();
    show1();
  };

  minus.onclick = () => {
    if (data.length > 1) {
      data.length--;
    }
    no_of_products.innerHTML = data.length;
    show();
    show1();
  };

  no_of_products_div.append(minus, no_of_products, plus);

  title_div.append(h2, p1, no_of_products_div);

  let price_div = document.createElement("div");
  price_div.className = "So_wtf";

  let p2 = document.createElement("p");
  p2.innerText = `₹ ${ele.discounted_price}`;

  let button1 = document.createElement("button");
  button1.innerText = "x Remove";
  button1.onclick = () => {
    localStorage.setItem("Cart", JSON.stringify(data.splice(i, 1)));
    So_container_div.innerHTML = null;
  };

  price_div.append(p2, button1);

  let box_div = document.createElement("div");
  box_div.setAttribute("id", "So_box");
  box_div.append(image_div, title_div, price_div);

  let price = document.createElement("div");

  let pp = document.createElement("div");
  let p3 = document.createElement("p");
  p3.innerText = "Subtotal";
  pp.append(p3);

  let rupess = document.createElement("div");
  let p4 = document.createElement("p");
  p4.innerText = `₹ ${ele.discounted_price}`;
  function show() {
    p4.innerText = `₹ ${Number(ele.discounted_price) * data.length}`;
  }
  rupess.append(p4);

  price.append(pp, rupess);

  let total = document.createElement("div");
  total.className = "ttl";

  let ll = document.createElement("div");
  let p5 = document.createElement("p");
  p5.innerText = "Total";
  ll.append(p5);

  let mm = document.createElement("div");
  let p6 = document.createElement("p");
  p6.innerText = `₹ ${ele.discounted_price}`;
  function show1() {
    p6.innerText = `₹ ${Number(ele.discounted_price) * data.length}`;
  }
  mm.append(p6);

  total.append(ll, mm);

  let button_div = document.createElement("div");

  let button2 = document.createElement("button");
  button2.innerText = "Proceed to Checkout";
  button2.onclick = () => {
    window.location.href = "Checkout.html";
  };
  button_div.append(button2);

  let checkout_div = document.createElement("div");
  checkout_div.setAttribute("id", "So_checkout");
  checkout_div.append(price, total, button_div);

  So_container_div.append(box_div, checkout_div);

  let container_div = document.getElementById("So_container");
  container_div.append(So_container_div);
});

//
user_prof();
