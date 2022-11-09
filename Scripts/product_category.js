window.onload=()=>{
    get_data();
}

const get_data=async ()=>{
    let response= await fetch(`https://raw.githubusercontent.com/shaantanu9/Myntra-API/d53b4653c616ad53175805cad04749a38bc7fa57/db.json`)
    let data = await response.json();
    data=data.clothing
    data=data.filter((el)=>{
        return el.category=="Mens"
    })
    console.log(data)
    display_products(data)
}

const display_products=(data)=>{
    let container=document.getElementById("c_products")
    container.innerHTML=null
    data.forEach((el)=>{
        let div=document.createElement("div")
        let image=document.createElement("img")
        if(el.images.length==1){
            image.src=el.images
        }else{
            image.src=el.images[0]
        }
       
        let title=document.createElement("h3")
        title.innerHTML=el.subtitle

        if(el.strike_price!=null && el.discounted_price!=null){
            let price_div=document.createElement("div")    

            let strike_price=document.createElement("span")
            strike_price.innerHTML=`₹${convert_to_numbers(el.strike_price)}`       
            strike_price.style.textDecoration="line-through"
            strike_price.style.color="#aeaca8"

            let price=document.createElement("span")
            price.innerHTML=`&nbsp ₹${convert_to_numbers(el.discounted_price)}`
            price.style.color="#ff7261"
        
            price_div.append(strike_price,price)
            div.append(image,title,price_div)
            container.append(div)
            div.onclick=()=>{
                localStorage.setItem("Current_Product",JSON.stringify(el))
                location.href="product.html"
            }
            
        }
        
    })
}
const convert_to_numbers =(n)=>{
    let s=[]
    let c;
    s.push(".00")
    for(let i=n.length-1;i>=0;i--){
        s.push(n[i])
        if(i==n.length-3 && n.length>3){
            s.push(",")
        }if(c==2 && i<n.length-3){
            s.push(",")
            c=0
        }
        c++
    }
    return s.reverse().join("")
}