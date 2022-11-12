

const append_added_data=()=>{
      append()
}

//Creating recent added function

const append= async()=>{
     try{
        let data_from_user= await fetch('https://636bda08ad62451f9fbd8076.mockapi.io/apnidukaan');
        let  data=await data_from_user.json();
        console.log(data)
        let actual_data=data.items
        console.log(actual_data)

       actual_data.forEach((el)=>{
        let append_div=document.getElementById('ak-pro-append');
        let card_div=document.createElement("div");
        card_div.setAttribute('id','ak-card-div')
        let pro_title=document.createElement('h4');
         pro_title.innerHTML=el.title
        let img=document.createElement('img');
        img.src=el.image_url
        let des=document.createElement('p');
        des.innerHTML=el.subtitle
        let price=document.createElement('p');
        price.innerHTML='Rs.'+el.strike_price;

        card_div.append(img,pro_title,des,price)
        append_div.append(card_div)

       })
     }     
     catch(err){
        console.log(err);
     }      
}
append_added_data()


//creating order data function

const Purchase_data=()=>{
   Purchase_data_append()
}
let tbody=document.getElementById('tbody')
let Cart=JSON.parse(localStorage.getItem('Cart')) ||[]
function Purchase_data_append(){
      Cart.forEach((el,i)=>{
         let tr=document.createElement('tr');
          let order_num=document.createElement('td')
          order_num.innerText='#'+(i+2)
          let date=document.createElement('td')
          date.innerText="20Sep 2021"

          let fullfill=document.createElement('td')
          fullfill.innerText="Order Confirmed"
          let payment_status=document.createElement('td')
          payment_status.innerText="paid"
          let total=document.createElement('td')
          total.innerText="Rs "+(el.discounted_price*el.Quantity)+".00"
          let user_name=document.createElement('td');
          user_name.innerText=el.name

          tr.append(order_num,date,user_name,fullfill,payment_status,total)
       tbody.append(tr)
      })
}
console.log(Cart)
Purchase_data()
