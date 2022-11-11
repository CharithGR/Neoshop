import {navbar} from '../Components/navbar.js'
let navbar_div=document.getElementById('Son_navbar')
navbar_div.innerHTML=navbar()

import {footer} from '../Components/footer.js'
let footer_div=document.getElementById('Sn_footer')
footer_div.innerHTML=footer();

let data=JSON.parse(localStorage.getItem("Cart")) || []

data.forEach((ele)=>{
let image_div=document.createElement('div')

let image=document.createElement('img')
image.className="imge"
image.src=ele.images
image_div.append(image)

let title_div=document.createElement('div')

let h2=document.createElement('h2')
h2.innerText=ele.subtitle

let p1=document.createElement('p')
p1.innerText=`Size: ${ele.size[0]}`

let button=document.createElement('div')
button.className="So_span"

let span=document.createElement('span')
let pa=document.createElement('p')
pa.innerText="- "
span.append(pa)

let span1=document.createElement('span')
let input=document.createElement('input')
input.type="number"
input.display=ele.length
span1.append(input)

let span2=document.createElement('span')
let pa1=document.createElement('p')
pa1.innerText="+ "
span2.append(pa1)

button.append(span,span1,span2)


title_div.append(h2,p1,button)

let price_div=document.createElement('div')
price_div.className="So_wtf"

let p2=document.createElement('p')
p2.innerText=`₹ ${ele.discounted_price}`

let button1=document.createElement('button')
button1.innerText="x Remove"

price_div.append(p2,button1)

let box_div=document.getElementById("So_box")
box_div.append(image_div,title_div,price_div)


let price=document.createElement('div')

let pp=document.createElement('div')
let p3=document.createElement('p')
p3.innerText="Subtotal"
pp.append(p3)

let rupess=document.createElement('div')
let p4=document.createElement('p')
p4.innerText=`₹ ${ele.discounted_price}`
rupess.append(p4)


price.append(pp,rupess)


let total=document.createElement('div')
total.className="ttl"

let ll=document.createElement('div')
let p5=document.createElement('p')
p5.innerText="Total"
ll.append(p5)

let mm=document.createElement('div')
let p6=document.createElement('p')
p6.innerText=`₹ ${ele.discounted_price}`
mm.append(p6)

total.append(ll,mm)


let button_div=document.createElement('div')

let button2=document.createElement('button')
button2.innerText="Proceed to Checkout"
button2.onclick=()=>{
    window.location.href="Checkout.html"
}
button_div.append(button2)

let checkout_div=document.getElementById('So_checkout')
checkout_div.append(price,total,button_div)


let container_div=document.getElementById('So_container')
container_div.append(box_div,checkout_div)

})

