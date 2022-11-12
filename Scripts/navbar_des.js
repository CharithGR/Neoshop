function sidebar() {
  // SIDEBAR =>
  let wrapper = document.querySelector("#hari_wrapper");
  let sidebarOpenHam = document.querySelector("#hari_ham");
  sidebarOpenHam.onclick = () => {
    wrapper.style.display = "block";
  };
  let sidebarCloseBtn = document.querySelector("#sidebar_close_btn");
  sidebarCloseBtn.onclick = () => {
    wrapper.style.display = "none";
  };
  //
  // =======
  let count = 1;
  const function_to_accord = (on_click_el, show_box, i) => {
    on_click_el.onclick = () => {
      if (count === 1) {
        i.className = "fa-solid fa-chevron-down";
        show_box.style.display = "block";
        count++;
      } else if (count === 2) {
        i.className = "fa-solid fa-chevron-up";
        show_box.style.display = "none";
        count = 1;
      }
    };
  };
  //
  //=>01
  let categories_click_btn = document.querySelector("#hari_sidebar_categories");
  let categories_click_btn_i = document.querySelector(
    "#hari_sidebar_categories > div > i"
  );
  let sidebar_categories_box = document.querySelector(
    "#hari_sidebar_categories_list"
  );
  //=>a
  let sidebar_clothing_btn = document.querySelector("#clothing_sidebar_btn");
  let sidebar_clothing_btn_i = document.querySelector(
    "#clothing_sidebar_btn > i"
  );
  let clothing_box = document.querySelector("#clothing");
  // =>b
  let sidebar_footwear_btn = document.querySelector("#footwear_sidebar_btn");
  let sidebar_footwear_btn_i = document.querySelector(
    "#footwear_sidebar_btn > i"
  );
  let footwear_box = document.querySelector("#footwear");
  // =>c
  let sidebar_electric_btn = document.querySelector("#electric_sidebar_btn");
  let sidebar_electric_btn_i = document.querySelector(
    "#electric_sidebar_btn > i"
  );

  let electric_box = document.querySelector("#electric");
  // =>d
  let sidebar_health_btn = document.querySelector("#health_sidebar_btn");
  let sidebar_health_btn_i = document.querySelector("#health_sidebar_btn > i");

  let health_box = document.querySelector("#health");
  // =>e
  let sidebar_jewellery_btn = document.querySelector("#jewellery_sidebar_btn");
  let sidebar_jewellery_btn_i = document.querySelector(
    "#jewellery_sidebar_btn > i"
  );

  let jewellery_box = document.querySelector("#jewellery");
  // =>f
  let sidebar_industrial_btn = document.querySelector(
    "#industrial_sidebar_btn"
  );
  let sidebar_industrial_btn_i = document.querySelector(
    "#industrial_sidebar_btn > i"
  );

  let industrial_box = document.querySelector("#industrial");
  // =>g
  let sidebar_kitchen_btn = document.querySelector("#kitchen_sidebar_btn");
  let sidebar_kitchen_btn_i = document.querySelector(
    "#kitchen_sidebar_btn > i"
  );
  let kitchen_box = document.querySelector("#kitchen");
  // =>CALLLING ALL THE FUNCTION HERE
  function_to_accord(
    categories_click_btn,
    sidebar_categories_box,
    categories_click_btn_i
  );
  function_to_accord(
    sidebar_clothing_btn,
    clothing_box,
    sidebar_clothing_btn_i,
    sidebar_clothing_btn_i
  );
  function_to_accord(
    sidebar_footwear_btn,
    footwear_box,
    sidebar_footwear_btn_i
  );
  function_to_accord(
    sidebar_electric_btn,
    electric_box,
    sidebar_electric_btn_i
  );
  function_to_accord(sidebar_health_btn, health_box, sidebar_health_btn_i);
  function_to_accord(
    sidebar_jewellery_btn,
    jewellery_box,
    sidebar_jewellery_btn_i
  );
  function_to_accord(
    sidebar_industrial_btn,
    industrial_box,
    sidebar_industrial_btn_i
  );
  function_to_accord(sidebar_kitchen_btn, kitchen_box, sidebar_kitchen_btn_i);
}
export { sidebar };
