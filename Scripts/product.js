import { navbar } from "../Components/navbar.js";
import { footer } from "../Components/footer.js";

let Total_Products=1


window.onload = () => {
  document.getElementById("navbar").innerHTML = navbar();
  document.getElementById("footer").innerHTML = footer();

  let el = JSON.parse(localStorage.getItem("Current_Product"));
  let SimilarProducts =JSON.parse(localStorage.getItem("SimilarProducts"));
  display_products(SimilarProducts)
  let image_div = document.getElementById("c_image_display");
  let image = document.createElement("img");
  if (el.images.length == 1) {
    image.src = el.images;
  } else {
    image.src = el.images[7];
  }
  image_div.append(image);

  let content_div = document.getElementById("c_content_display");
  let title=document.createElement("h1")
        title.innerHTML=el.title
        title.style.color="#baa585"

  let subtitle = document.createElement("h2");
  subtitle.innerHTML = el.subtitle;

  let price_div = document.createElement("div");
  price_div.setAttribute("id", "c_price_div");

  let MRP = document.createElement("span");
  MRP.innerHTML = "MRP &nbsp ";
  MRP.style.color = "#aeaca8";
  let strike_price = document.createElement("span");
  strike_price.innerHTML = `₹${convert_to_numbers(el.strike_price)}`;
  strike_price.style.textDecoration = "line-through";
  strike_price.style.color = "#aeaca8";

  let price = document.createElement("span");
  price.innerHTML = `&nbsp ₹${convert_to_numbers(el.discounted_price)} &nbsp`;
  price.style.color = "#ff7261";
  let discount = document.createElement("span");
  discount.style.color = "#ff7261";

  if (el.discount == null || el.discount == undefined) {
    let x= (el.discounted_price/el.strike_price)*100 ;
    x=x.toFixed()
    discount.innerHTML=x+ "%"
  } else {
    discount.innerHTML = `${el.discount}`;
  }

  let tax = document.createElement("p");
  tax.setAttribute("id", "c_tax");
  tax.innerHTML = "Inclusive of all taxes";

  let size_label = document.createElement("label");
  size_label.innerHTML = "Size";
  let size = document.createElement("select");

  let option = document.createElement("option");
  option.innerHTML = "Choose An Option";
  size.append(option);
  for (let i = 0; i < el.size.length; i++) {
    let option = document.createElement("option");
    option.innerHTML = el.size[i];
    size.value = el.size;
    // el.size=size.value
    size.append(option);
  }
  let no_of_products_div = document.createElement("div");
  no_of_products_div.setAttribute("id", "no_of_products_div");
  let no_of_products_div_child = document.createElement("div");
   let plus=document.createElement("button");
   plus.innerHTML ="+"
   

   let no_of_products = document.createElement("span");
   no_of_products.innerHTML=Total_Products


   let minus=document.createElement("button");
   minus.innerHTML ="-"

   plus.onclick = ()=>{
    Total_Products++
    if(Total_Products>5){
      Total_Products--
      alert("You cannot buy more than 5 products for this Product")
    }
    no_of_products.innerHTML=Total_Products
  }

  minus.onclick=()=>{
    Total_Products--
    if(Total_Products<=0){
      Total_Products ++
    }
    no_of_products.innerHTML=Total_Products
  }



   no_of_products_div_child.append(minus,no_of_products,plus);
   no_of_products_div.append(no_of_products_div_child)
  let cart_wish_div= document.createElement("div");
  cart_wish_div.setAttribute("id","cart_wish_div")

  let Add_to_Cart = document.createElement("button");
  Add_to_Cart.innerHTML = ` <svg
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
</svg>Add to Cart`;
  Add_to_Cart.onclick = () => {
    if (size.value == "Choose An Option") {
      alert("Please select a Product Option before adding to cart");
      return;
    }
    el.size=size.value
    el.Quantity=Total_Products
    let Cart = JSON.parse(localStorage.getItem("Cart")) || [];
    if(check_if_product_already_in_cart(Cart,el) && Cart.length>0){
      localStorage.setItem("Cart", JSON.stringify(Cart));
    }else{
      Cart.push(el);
    localStorage.setItem("Cart", JSON.stringify(Cart));
    }
    
  };

  let wishlist = document.createElement("button");
  wishlist.innerHTML = `<i class="far fa-heart"></i> Save to wishlist`;

  let details_p = document.createElement("p");
  details_p.innerHTML = `100% Original Products <br />
  Pay on delivery might be available<br />
  Easy 15 days returns and exchanges`;
  details_p.style.color = "#282c3f";

  cart_wish_div.append(Add_to_Cart,
    wishlist,)
  price_div.append(MRP, strike_price, price, discount);
  content_div.append(
    title,subtitle,
    price_div,
    tax,
    size_label,
    size,
    no_of_products_div,
    cart_wish_div,
    details_p
  );
};

const convert_to_numbers = (n) => {
  let s = [];
  let c;
  s.push(".00");
  for (let i = n.length - 1; i >= 0; i--) {
    s.push(n[i]);
    if (i == n.length - 3 && n.length > 3) {
      s.push(",");
    }
    if (c == 2 && i < n.length - 3) {
      s.push(",");
      c = 0;
    }
    c++;
  }
  return s.reverse().join("");
};



const display_products=(data)=>{
  let container=document.getElementById("c_similar_products")
  container.innerHTML=null
  data.forEach((el,i)=>{
      let div=document.createElement("div")
      let image=document.createElement("img")
      if(el.images.length==1){
          image.src=el.images
      }else{
          image.src=el.images[0]
      }
      let title=document.createElement("h3")
      title.innerHTML=el.title
      title.setAttribute("id","SimilarProductsTitle")
      title.style.color="#baa585"

      let subtitle=document.createElement("h3")
      subtitle.innerHTML=el.subtitle

      if(el.strike_price!=null){
          if(el.discounted_price==null || el.discounted_price==undefined){
              el.discounted_price=el.strike_price
          } 
          let price_div=document.createElement("div")    

          let strike_price=document.createElement("span")
          strike_price.innerHTML=`₹${convert_to_numbers(el.strike_price)}`       
          strike_price.style.textDecoration="line-through"
          strike_price.style.color="#aeaca8"

          let price=document.createElement("span")
          price.innerHTML=`&nbsp ₹${convert_to_numbers(el.discounted_price)}`
          price.style.color="#ff7261"
      
          price_div.append(strike_price,price)
          div.append(image,title,subtitle,price_div)
          container.append(div)
          div.onclick=()=>{
              localStorage.setItem("SimilarProducts",JSON.stringify(data))
              localStorage.setItem("Current_Product",JSON.stringify(el))
              location.href="product.html"
          }
          
      }
      
  })
}


const check_if_product_already_in_cart =(cart_data,el1)=>{

let a = cart_data.filter((el)=>{
  
    if(el.subtitle==el1.subtitle && el.title==el1.title && el.size==el1.size){
     
      el.Quantity+=el1.Quantity;
      console.log(el.Quantity);
      if(el.Quantity>5){
        el.Quantity=5
        alert("Product already in cart, Quantity increased to 5.You cannot buy more than 5 items of this product")
      }else{
        alert(`Product already in cart, Quantity increased to ${el.Quantity}`)
      }
      return true
    }

})
if(a.length>0){  
  return true
}
return false
}

