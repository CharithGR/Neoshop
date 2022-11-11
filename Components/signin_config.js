function user_signinConfig() {
  let hari_current_user = JSON.parse(localStorage.getItem("Current_User"));
  let placeholder_name_a = document.querySelector("#hari_name_of_the_user");

  console.log(placeholder_name_a);
  let hari_user_check = JSON.parse(localStorage.getItem("is_logged_in"));
  console.log(hari_user_check);
  if (hari_user_check == true) {
    placeholder_name_a.innerText = hari_current_user.name;
  } else {
    placeholder_name_a.innerText = "user";
    let select_html = document.querySelector("#select_option_profile");
    let option_for_signin = document.createElement("option");
    option_for_signin.setAttribute("id", "option_for_signin");
    option_for_signin.value = "sign_in";
    // let option_for_signin_innerText
    document.querySelector("#option_for_signin");
    option_for_signin_innerText.innerText = "Sign In";
    select_html.append(option_for_signin);
  }
  //
  let option_selected = document.querySelector("#select_option_profile");
}

export { user_signinConfig };
