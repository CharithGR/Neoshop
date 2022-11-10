
window.onload=()=>{
    let el = JSON.parse(localStorage.getItem("Current_Product"));

    let image_div = document.getElementById("c_image_display");
    let image = document.createElement("img");
    image.src = el.images[el.images.length - 1];
    image_div.append(image);
    
    let content_div = document.getElementById("c_content_display");
    let title=document.createElement("h3")
    title.innerHTML=el.subtitle

    let price_div = document.createElement("div");
    
    let strike_price = document.createElement("span");
    strike_price.innerHTML = `₹${convert_to_numbers(el.strike_price)}`;
    strike_price.style.textDecoration = "line-through";
    strike_price.style.color = "#aeaca8";
    
    let price = document.createElement("span");
    price.innerHTML = `&nbsp ₹${convert_to_numbers(el.discounted_price)}`;
    price.style.color = "#ff7261";


    let size=document.createElement("select")
    
    let option = document.createElement("option");
    option.innerHTML = "Choose An Option"    
    size.append(option)
    for(let i=0;i<el.size.length;i++){
        let option = document.createElement("option")
        option.innerHTML = el.size[i]
        size.value = el.size
        size.append(option)
    }
    
    let Add_to_Cart = document.createElement("button")
    Add_to_Cart.innerHTML = "Add to Cart"
    Add_to_Cart.onclick=()=>{
        if(size.value=="Choose An Option"){
            alert("Please select a Product Option before adding to cart")
            return
        }
        let Cart =JSON.parse(localStorage.getItem("Cart")) || []
        Cart.push(el)
        localStorage.setItem("Cart",JSON.stringify(Cart))
    }
    price_div.append(strike_price, price);
    content_div.append(title,price_div,size,Add_to_Cart);
}


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


