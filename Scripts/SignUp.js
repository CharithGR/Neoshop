import { navbar } from "../Components/navbar.js";
import { user_prof } from "../Components/user_profile.js";
import { footer } from "../Components/footer.js";
import { append_cart_item_number } from "../Components/cart_badge.js";
document.getElementById("navbar").innerHTML = navbar();
append_cart_item_number();
document.querySelector("#signup_footer").innerHTML = footer();
window.onload = () => {
  let password = document.getElementById("c_password");
  password.oninput = () => {
    passwordCheck(password.value);
  };
};

let x_mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>`;
let check_mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`;
let form = document.getElementById("c_SignUp");
form.onsubmit = (e) => {
  e.preventDefault();
  let user = new User();
  let name = document.getElementById("c_name").value;
  let email = document.getElementById("c_email").value;
  let password = document.getElementById("c_password").value;
  if (passwordCheck(password)) {
    let confirmPassword = document.getElementById("c_confirmPassword").value;
    if (password != confirmPassword) {
      alert("Alert Password and Confirm Password are not the same");
      return;
    }
  }
  let userType = document.getElementById("c_userType").value;
  user.SignUP(name, email, password, userType);
  console.log(user);
};

class User {
  constructor() {}

  async SignUP(name, email, password, userType) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.userType = userType;
    let response = await fetch(
      `https://shrouded-beyond-89498.herokuapp.com/SignUp`
    );
    let data = await response.json();
    console.log(data);
    if (!check_if_user_exists(data, email)) {
      response = await fetch(
        `https://shrouded-beyond-89498.herokuapp.com/SignUp`,
        {
          method: "POST",
          body: JSON.stringify(this),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      data = await response.json();
      console.log(data);
    } else {
      alert("Account with this email already exists");
    }
  }
  Login() {}
}

const passwordCheck = (p) => {
  let passdiv = document.getElementById("c_password_check");
  passdiv.innerHTML = null;
  let a = [
    "Length is between 8-18 Characters",
    "Conatins Uppercase and Lowercase",
    "Contains Number and Special Character",
  ];
  let len = document.createElement("p");
  let ULcase = document.createElement("p");
  let SpecialCharNum = document.createElement("p");
  len.innerHTML = `${x_mark}   ${a[0]}`;
  ULcase.innerHTML = `${x_mark}   ${a[1]}`;
  SpecialCharNum.innerHTML = `${x_mark}   ${a[2]}`;
  let length = false;
  let cases = false;
  let special = false;

  passdiv.append(len, ULcase, SpecialCharNum);

  if (p.length >= 8 && p.length <= 18) {
    len.style.color = "green";
    len.style.fill = "green";
    len.innerHTML = `${check_mark}   ${a[0]}`;
    length = true;
  } else {
    len.style.color = "red";
    len.style.fill = "red";
    length = false;
  }
  if (containsUpperAndLower(p)) {
    ULcase.style.color = "green";
    ULcase.style.fill = "green";
    ULcase.innerHTML = `${check_mark}   ${a[1]}`;
    cases = true;
  } else {
    ULcase.style.color = "red";
    ULcase.style.fill = "red";
    cases = false;
  }
  if (containsSpecialAndNumber(p)) {
    SpecialCharNum.style.color = "green";
    SpecialCharNum.style.fill = "green";
    SpecialCharNum.innerHTML = `${check_mark}   ${a[2]}`;
    special = true;
  } else {
    SpecialCharNum.style.color = "red";
    SpecialCharNum.style.fill = "red";
    special = false;
  }
  if (special && cases && length) {
    return true;
  } else {
    return false;
  }
};

const containsUpperAndLower = (p) => {
  let l = "abcdefghijklmnopqrstuvwxyz";
  let u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let contains_lowercase = false;
  let contains_uppercase = false;
  for (let i = 0; i < p.length && !contains_lowercase; i++) {
    for (let j = 0; j < l.length && !contains_lowercase; j++) {
      if (l[j] == p[i]) {
        contains_lowercase = true;
      }
    }
  }
  for (let i = 0; i < p.length && !contains_uppercase; i++) {
    for (let j = 0; j < u.length && !contains_uppercase; j++) {
      if (u[j] == p[i]) {
        contains_uppercase = true;
      }
    }
  }
  if (contains_uppercase && contains_lowercase) {
    return true;
  } else {
    return false;
  }
};

const containsSpecialAndNumber = (p) => {
  let s = "!@#$%^&*()-+";
  let contains_number = false;
  let contains_special = false;
  for (let i = 0; i < p.length && !contains_number; i++) {
    if (Number.isInteger(+p[i])) {
      contains_number = true;
    }
  }
  for (let i = 0; i < p.length && !contains_special; i++) {
    for (let j = 0; j < s.length && !contains_special; j++) {
      if (p[i] == s[j]) {
        contains_special = true;
      }
    }
  }

  if (contains_number && contains_special) {
    return true;
  } else {
    return false;
  }
};

const check_if_user_exists = (data, email) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].email == email) {
      return true;
    }
  }
  return false;
};
//
user_prof();
