const navbar = () => {
  return `<div id="hari_navbar_1">
  <div id="hari_logo">
    <a href="#"
      ><img
        src="https://i.ibb.co/YhqGBny/IMG-20221109-002722-757-01.jpg"
        alt="image is broken !"
    /></a>
  </div>
  <div id="hari_nav_buttons">
    <ul id="hari_list_a">
      <li><a href="#">Home</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Shop</a></li>
      <li id="hari_categories">
        <a href="#">Categories</a>
        <ul class="dropdown">
          <li id="hari_list_a">
            <a href="#">Clothing</a>
            <ul class="dropdown_a">
              <li><a href="#">Men's Clothing</a></li>
              <li><a href="#">Women's Clothing</a></li>
            </ul>
          </li>
          <li id="hari_list_b">
            <a href="#">Fotwear</a>
            <ul class="dropdown_a">
              <li><a href="#">Men Sports Shoes & Sneakers</a></li>
            </ul>
          </li>
          <li id="hari_list_c">
            <a href="#">Electric Appliances</a>
            <ul class="dropdown_a">
              <li><a href="#">Philips Personal Care</a></li>
              <li><a href="#">Trimmer</a></li>
            </ul>
          </li>
          <li id="hari_list_d">
            <a href="#">Health & Personal Care</a>
            <ul class="dropdown_a">
              <li><a href="#">Health Care</a></li>
              <li><a href="#">Personal Care</a></li>
            </ul>
          </li>
          <li id="hari_list_e">
            <a href="#">Jewellery</a>
            <ul class="dropdown_a">
              <li><a href="#">Kada</a></li>
              <li><a href="#">Necklace</a></li>
              <li><a href="#">Ring</a></li>
              <li><a href="#">Jewellery Set</a></li>
            </ul>
          </li>
          <li id="hari_list_e">
            <a href="#">Industrial Supplies</a>
            <ul class="dropdown_a">
              <li><a href="#">Bathroom Accessories</a></li>
              <li><a href="#">Flour Mill</a></li>
              <li><a href="#">Food Processing Machine</a></li>
              <li><a href="#">Pulverizer</a></li>
            </ul>
          </li>
          <li id="hari_list_f">
            <a href="#">Kitchen Ware</a>
            <ul class="dropdown_a">
              <li><a href="#">Men's Clothing</a></li>
              <li><a href="#">Women's Clothing</a></li>
            </ul>
          </li>
          <li>
            <a href="#">MS Smart Gadgets</a>
          </li>
        </ul>
      </li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </div>
  <div id="hari_user_buttons">
    <div>
      <svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle
          cx="11"
          cy="11"
          r="8"
          stroke="#111111"
          fill="none"
          stroke-width="2px"
        ></circle>
        <line
          x1="21"
          y1="21"
          x2="16.65"
          y2="16.65"
          stroke="#111111"
          fill="none"
          stroke-width="2px"
        ></line>
      </svg>
    </div>
    <div>
      <svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
          stroke="#111111"
          fill="none"
          stroke-width="2px"
        ></path>
        <circle
          cx="12"
          cy="7"
          r="4"
          stroke="#111111"
          fill="none"
          stroke-width="2px"
        ></circle>
      </svg>
    </div>
    <div>
      <svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          stroke="#111111"
          fill="none"
          stroke-width="2px"
        ></path>
      </svg>
    </div>
    <div>
      <svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        focusable="false"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.9353 20.0337L20.7493 8.51772C20.7003 8.0402 20.2981 7.67725 19.8181 7.67725H4.21338C3.73464 7.67725 3.33264 8.03898 3.28239 8.51523L2.06458 20.0368C1.96408 21.0424 2.29928 22.0529 2.98399 22.8097C3.66874 23.566 4.63999 24.0001 5.64897 24.0001H18.3827C19.387 24.0001 20.3492 23.5747 21.0214 22.8322C21.7031 22.081 22.0361 21.0623 21.9353 20.0337ZM19.6348 21.5748C19.3115 21.9312 18.8668 22.1275 18.3827 22.1275H5.6493C5.16836 22.1275 4.70303 21.9181 4.37252 21.553C4.042 21.1878 3.88005 20.7031 3.92749 20.2284L5.056 9.55014H18.9732L20.0724 20.2216C20.1223 20.7281 19.9666 21.2087 19.6348 21.5748Z"
          fill="#111111"
        ></path>
        <path
          d="M12.1717 0C9.21181 0 6.80365 2.40811 6.80365 5.36803V8.6138H8.67622V5.36803C8.67622 3.44053 10.2442 1.87256 12.1717 1.87256C14.0992 1.87256 15.6674 3.44053 15.6674 5.36803V8.6138H17.5397V5.36803C17.5397 2.40811 15.1316 0 12.1717 0Z"
          fill="#111111"
        ></path>
      </svg>
    </div>
  </div>
</div>
<!-- NAVBAR 2 -->
<div id="hari_nav_design_2">
  <div id="hari_navbar_2">
    <div id="hari_ham">
      <div id="hari_side_nav">
        <svg
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          focusable="false"
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 0H0V2.10674H24V0Z" fill="#111111"></path>
          <path d="M24 7.88215H0V9.98889H24V7.88215Z" fill="#111111"></path>
          <path d="M24 15.8925H0V18H24V15.8925Z" fill="#111111"></path>
        </svg>
      </div>
    </div>
    <div id="hari_logo_b">
      <a href="#"
        ><img
          src="https://i.ibb.co/YhqGBny/IMG-20221109-002722-757-01.jpg"
          alt="image is broken !"
      /></a>
    </div>
    <div id="hari_user_buttons_b">
      <div>
        <svg
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle
            cx="11"
            cy="11"
            r="8"
            stroke="#111111"
            fill="none"
            stroke-width="2px"
          ></circle>
          <line
            x1="21"
            y1="21"
            x2="16.65"
            y2="16.65"
            stroke="#111111"
            fill="none"
            stroke-width="2px"
          ></line>
        </svg>
      </div>
      <div>
        <svg
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
            stroke="#111111"
            fill="none"
            stroke-width="2px"
          ></path>
          <circle
            cx="12"
            cy="7"
            r="4"
            stroke="#111111"
            fill="none"
            stroke-width="2px"
          ></circle>
        </svg>
      </div>
      <div>
        <svg
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            stroke="#111111"
            fill="none"
            stroke-width="2px"
          ></path>
        </svg>
      </div>
      <div>
        <svg
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          focusable="false"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.9353 20.0337L20.7493 8.51772C20.7003 8.0402 20.2981 7.67725 19.8181 7.67725H4.21338C3.73464 7.67725 3.33264 8.03898 3.28239 8.51523L2.06458 20.0368C1.96408 21.0424 2.29928 22.0529 2.98399 22.8097C3.66874 23.566 4.63999 24.0001 5.64897 24.0001H18.3827C19.387 24.0001 20.3492 23.5747 21.0214 22.8322C21.7031 22.081 22.0361 21.0623 21.9353 20.0337ZM19.6348 21.5748C19.3115 21.9312 18.8668 22.1275 18.3827 22.1275H5.6493C5.16836 22.1275 4.70303 21.9181 4.37252 21.553C4.042 21.1878 3.88005 20.7031 3.92749 20.2284L5.056 9.55014H18.9732L20.0724 20.2216C20.1223 20.7281 19.9666 21.2087 19.6348 21.5748Z"
            fill="#111111"
          ></path>
          <path
            d="M12.1717 0C9.21181 0 6.80365 2.40811 6.80365 5.36803V8.6138H8.67622V5.36803C8.67622 3.44053 10.2442 1.87256 12.1717 1.87256C14.0992 1.87256 15.6674 3.44053 15.6674 5.36803V8.6138H17.5397V5.36803C17.5397 2.40811 15.1316 0 12.1717 0Z"
            fill="#111111"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</div>
`;
};
export { navbar };
