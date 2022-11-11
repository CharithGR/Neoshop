function append_cart_item_number() {
  let innerText_cart = document.querySelector("#lblCartCount");
  let ls_cart_data = JSON.parse(localStorage.getItem("Cart"));
  innerText_cart.innerText = ls_cart_data.length;
}
export { append_cart_item_number };
