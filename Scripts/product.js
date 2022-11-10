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
    el.size=size.value
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



   no_of_products_div_child.append(plus,no_of_products,minus);
   no_of_products_div.append(no_of_products_div_child)
  let cart_wish_div= document.createElement("div");
  cart_wish_div.setAttribute("id","cart_wish_div")

  let Add_to_Cart = document.createElement("button");
  Add_to_Cart.innerHTML = "Add to Cart";
  Add_to_Cart.onclick = () => {
    if (size.value == "Choose An Option") {
      alert("Please select a Product Option before adding to cart");
      return;
    }
    el.Quantity=Total_Products
    let Cart = JSON.parse(localStorage.getItem("Cart")) || [];
    if(check_if_product_already_in_cart(Cart,el)){
      console.log("hi")
    }
    Cart.push(el);
    localStorage.setItem("Cart", JSON.stringify(Cart));
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

let a = cart_data.forEach((el)=>{
  if(el.subtitle==el1.subtitle && el.title==el1.title && el.size==el1.size){
      return true
  }
})
console.group("hello")
return false
}

