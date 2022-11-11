

const append_added_data=()=>{
      append()
}

// append function

const append= async()=>{
     try{
        let data_from_user= await fetch('https://shrouded-beyond-89498.herokuapp.com/Products');
        let  data=await data_from_user.json();
        console.log(data)
       data.forEach(({category,title,subtitle,strike_price,images})=>{
        let append_div=document.getElementById('ak-pro-append');
        let card_div=document.createElement("div");
        card_div.setAttribute('id','ak-card-div')
        let pro_title=document.createElement('h4');
        pro_title.innerHTML=title
        let img=document.createElement('img');
        img.src=images
        let des=document.createElement('p');
        des.innerHTML=subtitle
        let price=document.createElement('p');
        price.innerHTML='Rs.'+strike_price;

        card_div.append(img,title,des,price)
        append_div.append(card_div)

       })
     }     
     catch(err){
        console.log(err);
     }      
}
append_added_data()
