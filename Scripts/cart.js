
import { navbar } from "../Components/navbar.js";
let navbar_div = document.getElementById("Son_navbar");
navbar_div.innerHTML = navbar();
import { user_prof } from "../Components/user_profile.js";
import { footer } from "../Components/footer.js";
import { append_cart_item_number } from "../Components/cart_badge.js";
append_cart_item_number();
let footer_div = document.getElementById("Sn_footer");
footer_div.innerHTML = footer();


let hari_cart_details = JSON.parse(localStorage.getItem("Cart"));
let empty_cart_msg = document.querySelector("#empty_cart_message");
if (hari_cart_details === null || hari_cart_details.length === 0) {
  empty_cart_msg.style.display = "block";
} else {
  empty_cart_msg.style.display = "none";
}


// let LSdata=JSON.parse(localStorage.getItem("Cart")) || []
// let container_div=document.getElementById('So_container')
// showData(LSdata)

// function showData(data)
// {
//   container_div.innerHTML=null;

// data.forEach((ele, index) => {
//   let So_container_div = document.createElement("div");
//   So_container_div.setAttribute("id", "So_container1");

//   let image_div = document.createElement("div");

//   let image = document.createElement("img");
//   image.className = "imge";
//   image.src = ele.images;
//   image_div.append(image);

//   let title_div = document.createElement("div");

//   let h2 = document.createElement("h2");
//   h2.innerText = ele.subtitle;




// let p1=document.createElement('p')
// p1.innerText=`Size: ${ele.size}`


//   let no_of_products_div = document.createElement("div");
//   no_of_products_div.setAttribute("id", "So_no_of_products");
//   let plus = document.createElement("button");
//   plus.innerHTML = "+";

//   let no_of_products = document.createElement("button");
//   no_of_products.innerHTML = data.length;

//   let minus = document.createElement("button");
//   minus.innerHTML = "-";

//   plus.onclick = () => {
//     data.length++;
//     if (data.length > 5) {
//       data.length--;
//       alert("You cannot buy more than 5 products for this Product");
//     }

//     no_of_products.innerHTML = data.length;
//     show();
//     show1();
//   };

  

//   minus.onclick=()=>{
//     if(data.length==1)
//     {
//       remove(index)
//     }
//     else if(data.length>1)
//     {
//     data.length--

//     }
//     no_of_products.innerHTML = data.length;
//     show();
//     show1();
//   };

//   no_of_products_div.append(minus, no_of_products, plus);

//   title_div.append(h2, p1, no_of_products_div);

//   let price_div = document.createElement("div");
//   price_div.className = "So_wtf";



// let p2=document.createElement('p')
// p2.innerText=`₹ ${ele.discounted_price}`

// let button1=document.createElement('button')
// button1.innerText="x Remove"
// button1.onclick=()=>{
//    remove(index)
// }

//   price_div.append(p2,button1);

//   let box_div = document.createElement("div");
//   box_div.setAttribute("id", "So_box");
//   box_div.append(image_div, title_div, price_div);

//   let price = document.createElement("div");

//   let pp = document.createElement("div");
//   let p3 = document.createElement("p");
//   p3.innerText = "Subtotal";
//   pp.append(p3);

//   let rupess = document.createElement("div");
//   let p4 = document.createElement("p");
//   p4.innerText = `₹ ${ele.discounted_price}`;
//   function show() {
//     p4.innerText = `₹ ${Number(ele.discounted_price) * data.length}`;
//   }
//   rupess.append(p4);

//   price.append(pp, rupess);

//   let total = document.createElement("div");
//   total.className = "ttl";

//   let ll = document.createElement("div");
//   let p5 = document.createElement("p");
//   p5.innerText = "Total";
//   ll.append(p5);

//   let mm = document.createElement("div");
//   let p6 = document.createElement("p");
//   p6.innerText = `₹ ${ele.discounted_price}`;
//   function show1() {
//     p6.innerText = `₹ ${Number(ele.discounted_price) * data.length}`;
//   }
//   mm.append(p6);

//   total.append(ll, mm);

//   let button_div = document.createElement("div");


//   let button2 = document.createElement("button");
//   button2.innerText = "Proceed to Checkout";
//   button2.onclick = () => {
//     window.location.href = "Checkout.html";
//   };
//   button_div.append(button2);

//   let checkout_div = document.createElement("div");
//   checkout_div.setAttribute("id", "So_checkout");
//   checkout_div.append(price, total, button_div);


//   So_container_div.append(box_div, checkout_div);
//   container_div.append(So_container_div);

// });
// }

// function remove(index)
// {
//   LSdata.splice(index,1)
//   localStorage.setItem("Cart",JSON.stringify(LSdata));
//   showData(LSdata)
// }


// //
// user_prof();





let cart =JSON.parse(localStorage.getItem("Cart"))||[]


const display=(data)=>{

let parent_div=document.getElementById("c_products_display")
parent_div.innerHTML=null
  data.forEach((el,i)=>{
    let Total_Products=+el.Quantity
    let div= document.createElement("div")
    div.setAttribute("class","displayCart")
    let image =document.createElement("img")
    image.src=el.images[0]||el.images

    let category=document.createElement("h2")
    category.innerHTML=el.category

    // let quantity=document.createElement("p");
    // quantity.innerHTML=el.Quantity


    let Total_price_of_product=document.createElement("p");
    Total_price_of_product.innerHTML="₹"+(Total_Products)*(el.discounted_price)



    let no_of_products_div = document.createElement("div");
  no_of_products_div.setAttribute("id", "no_of_products_div");
  let no_of_products_div_child = document.createElement("div");
  let plus = document.createElement("button");
  plus.innerHTML = "+";

  let no_of_products = document.createElement("span");
  no_of_products.innerHTML = Total_Products;

  let minus = document.createElement("button");
  minus.innerHTML = "-";

  plus.onclick = () => {
    Total_Products++;
    if (Total_Products > 5) {
      Total_Products--;
      
      alert("You cannot buy more than 5 products for this Product");
    }
    Total_price_of_product.innerHTML="₹"+(Total_Products)*(el.discounted_price)
    no_of_products.innerHTML = Total_Products;
    el.Quantity=Total_Products
    localStorage.setItem("cart",JSON.stringify(cart));
      display(cart)
      localStorage.setItem("cart",JSON.stringify(cart));
      display(cart)
      displayTotalCartAmount(cart)
  };

  minus.onclick = () => {
    Total_Products--;
    if (Total_Products <= 0) {
      Total_Products++;
      cart.splice(i,1)
      
    }
    Total_price_of_product.innerHTML="₹"+(Total_Products)*(el.discounted_price)
    no_of_products.innerHTML = Total_Products;
    el.Quantity=Total_Products
    localStorage.setItem("cart",JSON.stringify(cart));
      display(cart)
      displayTotalCartAmount(cart)
  };

  let size =document.createElement("p")
  size.innerHTML ="Size: "+el.size
  no_of_products_div_child.append(minus, no_of_products, plus);
  no_of_products_div.append(no_of_products_div_child);
    
  let div2= document.createElement("div")
  div2.append(category,Total_price_of_product,no_of_products_div,size)

    div.append(image,div2)
    parent_div.append(div)
  })
}

display(cart)


const displayTotalCartAmount=(data)=>{
  document.getElementById("c_TotalAmountDisplay").innerHTML=null

  let head =document.createElement("h3")
  head.innerHTML = "Total Amount:&nbsp;"
  let head2 =document.createElement("h3")
  
  let sum=0
  for(let i=0;i<data.length;i++){
    sum+=(data[i].Quantity*data[i].discounted_price)
  }
head2.innerHTML = sum
  let div=document.createElement("div")
  div.append(head,head2)
  document.getElementById("c_TotalAmountDisplay").append(div,btn)
}
let btn = document.createElement("button")
btn.setAttribute("id","checkoutbtn")
btn.innerHTML ="Proceed to checkout"
btn.onclick = () =>{
  window.location.href="checkout.html"
}


displayTotalCartAmount(cart)