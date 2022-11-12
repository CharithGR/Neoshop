function append_cart_item_number() {
  let innerText_cart = document.querySelector("#lblCartCount");
  console.log(innerText_cart);
  let ls_cart_data = JSON.parse(localStorage.getItem("Cart"));
  if (ls_cart_data === null) {
    innerText_cart.innerText = 0;
  } else {
    innerText_cart.innerText = ls_cart_data.length;
  }
}
export { append_cart_item_number };
