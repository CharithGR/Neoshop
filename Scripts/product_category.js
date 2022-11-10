
    import {navbar} from "../Components/navbar.js"
    import {footer} from "../Components/footer.js"
let page=0
window.onload=()=>{
    document.getElementById("navbar").innerHTML=navbar()
    document.getElementById("footer").innerHTML=footer()



    document.getElementById("hari_user_buttons_a").style.backgroundColor="yellow"
    console.log(document.getElementById("hari_user_buttons_a"))
    document.getElementById("hari_user_buttons_a").onclick=()=>{
        window.location.href="SignUp.html"
    }


    get_data();
    
}

const get_data=async (Filter_products)=>{
    let response= await fetch(`https://raw.githubusercontent.com/shaantanu9/Myntra-API/d53b4653c616ad53175805cad04749a38bc7fa57/db.json`)
    let data = await response.json();
    data=data.clothing
    data=data.filter((el)=>{
        return el.category=="Mens"
    })
    // for(let i=0;i<Filter_products.length;i++){
    //     data=data.filter((el)=>{
    //         return el.
    //     })
    // }

    // console.log(data)
    Pagination(data)
    display_products(data)
}

const display_products=(data)=>{
    let container=document.getElementById("c_products")
    container.innerHTML=null

    let page_data=data.slice(page*15,(page+1)*15)

    page_data.forEach((el,i)=>{
        let div=document.createElement("div")
        let image=document.createElement("img")
        if(el.images.length==1){
            image.src=el.images
        }else{
            image.src=el.images[0]
        }
       
        let title=document.createElement("h3")
        title.innerHTML=el.title
        title.style.color="#baa585"

        let subtitle=document.createElement("h5")
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
                localStorage.setItem("SimilarProducts",JSON.stringify(similarProducts(el.tilte,el.subtitle,data.slice(i+1)))) 
                localStorage.setItem("Current_Product",JSON.stringify(el))
                location.href="product.html"
            }
            
        }
        
    })
}

const Pagination =(data)=>{
    let div =document.getElementById("c_pagination")
    // div.innerHTML = null
    
    for(let i=0;i<(Math.floor(data.length/15));i++){        
        let btn= document.createElement("button")
        btn.innerHTML=i+1
        btn.style.display="inline"
        div.append(btn)
        btn.setAttribute("id","pagination_button")        
        btn.onclick = ()=>{
            if(page!=i){
                page=i
                display_products(data)                
            }
            
            
        }
    }

}

const page_button_style=()=>{

    btn.style.background="black"
    btn.style.color="white"
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

const similarProducts =(title,subtitle,data)=>{
let s=[]
data.forEach((el)=>{
    if(s.length>=5){
        return s
    }
    if(el.title==title && el.subtitle==subtitle){
        
    }else if(el.tilte==title || el.subtitle==subtitle){
        s.push(el)
    }
    
   
})
return s

}



// let arrayBrand=["Roadster","HRX by Hrithik Roshan","H&M"]
// let brand_checked=[]
// for(let i=0;i<arrayBrand.length;i++){
//     arrayBrand[i]=arrayBrand[i].split(" ").join("_")
//     let x =document.getElementById(`c_${arrayBrand[i]}`)
//     x.onchange=function(){
//         if(x.checked==true){
//             brand_checked.push(arrayBrand[i])
//             console.log(_tonormal(brand_checked))
//             get_data(brand_checked)
//         }else{
//             brand_checked= brand_checked.filter((el)=>{
//                 return el!=arrayBrand[i]
//             })
//             get_data(brand_checked)
//         }
       
//         // console.log(x.checked)
//         // console.log(brand_checked)
//     }
    
// }

// const _tonormal=(data)=>{
//     data=data.filter((el)=>{
//         return el.split("_").join(" ")
//     })
//     return data
// }

