const user_prof = () => {
  let hari_current_user = JSON.parse(localStorage.getItem("Current_User"));
  let hari_user_check =
    JSON.parse(localStorage.getItem("is_logged_in")) || false;
  console.log(hari_user_check);

  let user_profile_div = document.querySelector(
    "#hari_user_buttons_a > div:nth-child(2)"
  );
  let user_profile_svg = document.querySelector(
    "#hari_user_buttons_a > div:nth-child(2) > svg"
  );
  if (hari_user_check === true) {
    let ul = document.createElement("ul");
    ul.setAttribute("id", "hari_user_keys");
    let l1 = document.createElement("li");
    l1.style.cursor = "pointer";
    l1.innerText = hari_current_user.name;
    let l2 = document.createElement("li");
    l2.setAttribute("id", "hari_logout");
    l2.style.cursor = "pointer";
    l2.innerText = "Logout";
    l2.onclick = () => {
      hari_user_logout();
    };
    let l3 = document.createElement("li");
    l3.setAttribute("id", "redirect_to_admin_page");
    l3.style.cursor = "pointer";
    l3.onclick = () => {
      window.location.href = "admin.html";
    };
    l3.innerText = "Admin";
    let crnt_user = JSON.parse(localStorage.getItem("Current_User"));
    if (crnt_user.userType == "Admin") {
      ul.append(l3);
    }
    ul.append(l1, l2);

    user_profile_div.append(ul);
  } else if (hari_user_check === false) {
    let ul = document.createElement("ul");
    ul.setAttribute("id", "hari_user_keys");
    let l1 = document.createElement("li");
    l1.style.cursor = "pointer";
    l1.setAttribute("id", "hari_login_redirect");
    l1.innerText = "Login";
    let l2 = document.createElement("li");
    l2.style.cursor = "pointer";
    l2.setAttribute("id", "hari_signup_redirect");
    l2.innerText = "Signup";
    ul.append(l1, l2);
    user_profile_div.append(ul);
  }
  //
  let clicks = 1;
  user_profile_svg.onclick = () => {
    let hidden_profile_menu = document.querySelector("#hari_user_keys");
    if (clicks === 1) {
      hidden_profile_menu.style.visibility = "visible";
      clicks++;
    } else if (clicks === 2) {
      hidden_profile_menu.style.visibility = "hidden";
      clicks = 1;
    }
  };
  //hari_login_redirect
  let hari_login_redirect_btn = document.querySelector("#hari_login_redirect");
  hari_login_redirect_btn.onclick = () => {
    console.log("Logging in...");
    window.location.href = "Login.html";
  };
  //hari_signup_redirect
  let hari_signup_redirect_btn = document.querySelector(
    "#hari_signup_redirect"
  );
  hari_signup_redirect_btn.onclick = () => {
    console.log("Signing up...");
    window.location.href = "SignUp.html";
  };
  //

  function hari_user_logout() {
    hari_user_check = false;
    localStorage.removeItem("is_logged_in");
    localStorage.removeItem("Current_User");
    window.location.reload();
  }
};
export { user_prof };
