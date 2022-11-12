import { navbar } from "../Components/navbar.js";
import { append_cart_item_number } from "../Components/cart_badge.js";
import { user_prof } from "../Components/user_profile.js";
import { sidebar } from "../Scripts/navbar_des.js";
import { footer } from "../Components/footer.js";
document.getElementById("navbar").innerHTML = navbar();
sidebar();
append_cart_item_number();
let form = document.getElementById("c_login_form");
form.onsubmit = (e) => {
  e.preventDefault();
  let email = form.c_email.value;
  let password = form.c_password.value;
  get_user_data(email, password);
};
//
// let userType = JSON.parse(localStorage.getItem("Current_User"));
// console.log("djncjdnc");
//
let login_page_footer = document.querySelector("#login_footer");
login_page_footer.innerHTML = footer();
user_prof();
//
const get_user_data = async (email, password) => {
  let response = await fetch(
    `https://shrouded-beyond-89498.herokuapp.com/SignUp`
  );
  let data = await response.json();
  console.log(data);
  let is_logged_in = false;
  data.forEach((el) => {
    if (el.email == email && el.password == password) {
      localStorage.setItem("Current_User", JSON.stringify(el));
      alert("Login successful");
      is_logged_in = true;
      localStorage.setItem("is_logged_in", is_logged_in);

      window.location.href = "index.html";
      return;
    }
  });
  if (!is_logged_in) {
    alert("Invalid email or password");
  }
};
// =>FOOTER
