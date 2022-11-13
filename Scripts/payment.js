import { navbar } from "../Components/navbar.js";
import { append_cart_item_number } from "../Components/cart_badge.js";
import { user_prof } from "../Components/user_profile.js";
document.querySelector("#navbar_append_div").innerHTML = navbar();
append_cart_item_number();
user_prof();
import { footer } from "../Components/footer.js";
document.getElementById("ak-footer").innerHTML = footer();
let proceed_btn = document.getElementById("ak-place-order-btn");
proceed_btn.onclick = () => {
  UserDetails();
};
let Cart = JSON.parse(localStorage.getItem("Cart")) || [];
let name = JSON.parse(localStorage.getItem("Custumer_name")) || [];
const UserDetails = () => {
  let cart_number = document.getElementById("ak-cart-number").value;
  let account_holder = document.getElementById("ak-cart-holder").value;
  let exp_monnth = document.getElementById("ak-cart-exp-month").value;
  let exp_year = document.getElementById("ak-cart-exp-year").value;
  let cvv = document.getElementById("ak-cart-cvv").value;
  //  localStorage.setItem('Custumer_name_second',JSON.stringify(name))
  Cart.forEach((el) => {
    if (el.name === undefined) {
      el.name = name[0];
    }
    localStorage.setItem("Cart", JSON.stringify(Cart));
  });
  if (
    cart_number != "" &&
    account_holder != "" &&
    exp_monnth != "" &&
    exp_year != "" &&
    cvv != ""
  ) {
    alert("Congratulations! Order Succesfully Placed");
  } else {
    alert("Fill all details");
  }
  window.location.href = "index.html";
};
