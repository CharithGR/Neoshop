let order_btn = document.querySelector("#hari_admin_order_btn");
let order_menu = document.querySelector("#hari_admin_right_lower_a");
let products_menu = document.querySelector("#hari_admin_right_lower_b");
let add_products_menu = document.querySelector("#hari_admin_right_lower_c");
order_btn.onclick = () => {
  add_products_menu.style.display = "none";
  products_menu.style.display = "none";
  order_menu.style.display = "block";
};
let products_btn = document.querySelector("#hari_admin_products_btn");
products_btn.onclick = () => {
  order_menu.style.display = "none";
  add_products_menu.style.display = "none";
  products_menu.style.display = "block";
};
let add_products_btn = document.querySelector("#add_products_btn");
add_products_btn.onclick = () => {
  order_menu.style.display = "none";
  products_menu.style.display = "none";
  add_products_menu.style.display = "block";
};
// ============================================================
let submit_btn = document.querySelector("#hari_submit_data_button");
submit_btn.onclick = () => {
  upload_data();
};
// =>IMAGE CONVERSION
let choose_image = document.querySelector("#choose_image");
choose_image.onchange = () => {
  convert_image();
};
const convert_image = async () => {
  let actual_img = choose_image.files[0];
  console.log(actual_img);
  //
  let form = new FormData();
  form.append("image", actual_img);
  let response = await fetch(
    "https://api.imgbb.com/1/upload?key=5e73f0dc624635d020cdfd9d1e493763",
    {
      method: "POST",
      body: form,
    }
  );
  // => GETTING THE CONVERTED IMAGE URL
  let converted_data = await response.json();
  image_url = converted_data.data.display_url;
  console.log(image_url);
  // ==================================
  let submit_btn = document.querySelector("#hari_submit_data_button");
  if (image_url != undefined) {
    submit_btn.style.display = "block";
  }
};
//
// =>ADD ALL PRODUCTS
const upload_data = async () => {
  let category = document.querySelector("#category_of_product").value;
  let discount = document.querySelector("#discount_of_product").value;
  let discounted_price = document.querySelector("#price_of_product").value;
  let title = document.querySelector("#title_of_product").value;
  let size_str = document.querySelector("#sizes_of_product").value;
  let size = size_str.trim().split(" ");
  let strike_price = document.querySelector("#striked_price_of_product").value;
  let subtitle = document.querySelector("#subtitle_of_product").value;
  let data_obj = {
    category,
    discount,
    discounted_price,
    title,
    size,
    strike_price,
    subtitle,
    image_url,
  };
  let upload_data = await fetch(
    "https://636bda08ad62451f9fbd8076.mockapi.io/apnidukaan",
    {
      method: "POST",
      body: JSON.stringify(data_obj),
      headers: {
        "content-type": "application/json",
      },
    }
  );
  let data = upload_data.json();
  alert("PRODUCT ADDED SUCCESSFULLY !");
  window.location.reload();
  console.log(data);
};
//=>fetching data
const fetch_data = async () => {
  let response = await fetch(
    "https://raw.githubusercontent.com/shaantanu9/Myntra-API/d53b4653c616ad53175805cad04749a38bc7fa57/db.json"
  );
  let response2 = await fetch(
    "https://shrouded-beyond-89498.herokuapp.com/Products"
  );
  let data2 = await response2.json();
  let data = await response.json();
  let inventory = document.querySelector("#hari_inventory_quantity");
  inventory.innerText = data.clothing.length + data2.length;
  console.log(data2.length);
};
fetch_data();
// redirect button
let redirect_btn = document.querySelector("#hari_admin_to_homepage");
redirect_btn.style.cursor = "pointer";
redirect_btn.onclick = () => {
  window.location.href = "#";
};
