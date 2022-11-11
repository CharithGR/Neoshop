
    import {navbar} from "../Components/navbar.js"
    import {footer} from "../Components/footer.js"
let page=0
let debounceID;
let category_filter=JSON.parse(localStorage.getItem("category_filter"))|| [false,false,false] 
window.onload=()=>{
    document.getElementById("navbar").innerHTML=navbar()
    document.getElementById("footer").innerHTML=footer()



    // document.getElementById("hari_user_buttons_a").style.backgroundColor="yellow"
    // console.log(document.getElementById("hari_user_buttons_a"))
    // document.getElementById("hari_user_buttons_a").onclick=()=>{
    //     window.location.href="SignUp.html"
    // }


    get_data();
    
}

const get_data=async (BrandSearch)=>{
  
  


    // let response = await fetch(`https://shrouded-beyond-89498.herokuapp.com/Products`)
    // let data = await response.json()

   
    let response= await fetch(`https://raw.githubusercontent.com/shaantanu9/Myntra-API/d53b4653c616ad53175805cad04749a38bc7fa57/db.json`)
    // let from_api = await response.json();
    // from_api=from_api.clothing
    // console.log(from_api)
    // for(let i=0;i<from_api.length;i++){
    //     data.push(from_api[i])
    // }
    let data = await response.json()
    data=data.clothing
    if(BrandSearch!=undefined){
        data=data.filter((el)=>{
           
            if(el.title!=null && el.subtitle!=null){
                return el.subtitle.toUpperCase().includes(BrandSearch.toUpperCase())||el.title.toUpperCase().includes(BrandSearch.toUpperCase())
            }
            
        })
    }console.log(category_filter)
    if(category_filter[0]==false && category_filter[1]==false && category_filter[2]==false){
        data=data.filter((el)=>{
            return el.category=="Womens"
        })
    }else{
        let x=[];
        let s=[]
        if(category_filter[0]){
            x=data.filter((el)=>{
                return el.category=="Womens"
            })
        }
        if(x.length>0){
        for(let i=0;i<x.length;i++){
            s.push(x[i])
            // s.splice(i,0,x[i])
        }}
        x=[]
        if(category_filter[1]){
            x=data.filter((el)=>{
                return el.category=="Mens"
            })
        }
        if(x.length>0){
        for(let i=0;i<x.length;i++){
            s.push(x[i])
            // s.splice(i,0,x[i])
        }}
        x=[]
        if(category_filter[2]){
            x=data.filter((el)=>{
                return el.category=="Child"
            })
        }
        if(x.length>0){
        for(let i=0;i<x.length;i++){
            s.push(x[i])
            // s.splice(i,0,x[i])
        }   }
        data=s
        console.log(data)
    } 
    
   
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
        if(el.title!=null){

                image.src=el.images[0]||el.images
        // console.log(el.images)
       
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
    }
    })
}

const Pagination =(data)=>{
    let div =document.getElementById("c_pagination")
    div.innerHTML = null
    if((Math.floor(data.length/15))>1){
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


let BrandSearch= document.getElementById("BrandSearch")

BrandSearch.oninput=()=>{
    if(debounceID){
        clearInterval(debounceID)
    }
    debounceID = setTimeout(()=>{
        console.log(BrandSearch.value)
        get_data(BrandSearch.value)
    },1000)
}

// let price_1 =document.getElementById("_1_499")
// let price_500 =document.getElementById("_500_999")
// let price_1000 =document.getElementById("_1000")

// price_1.onchange=()=>{
//     if(price_1.checked){   
//         if(price_500.checked && price_1000.checked){     
//             get_data(undefined,[[1,499],[500,999],[1000]])
//         }else if(price_500.checked){
//             get_data(undefined,[[1,499],[500,999]])
//         }else if(price_1000.checked){
//             get_data(undefined,[[1,499],[1000]])
//         }else{
//             get_data(undefined,[[1,499]])
//         }
//     }else{
//         if(price_500.checked && price_1000.checked){     
//             get_data(undefined,[[false],[500,999],[1000]])
//         }else if(price_500.checked){
//             get_data(undefined,[[false],[500,999]])
//         }else if(price_1000.checked){
//             get_data(undefined,[[false],[1000]])
//         }
//     }
// }
// price_500.onchange=()=>{
//     if(price_500.checked){   
//         if(price_1.checked && price_1000.checked){     
//             get_data(undefined,[[1,499],[500,999],[1000]])
//         }else if(price_1.checked){
//             get_data(undefined,[[1,499],[500,999]])
//         }else if(price_1000.checked){
//             get_data(undefined,[[500,999],[1000]])
//         }else{
//             get_data(undefined,[[500,999]])
//         }
//     }else{
//         if(price_1.checked && price_1000.checked){     
//             get_data(undefined,[[1,499],[false],[1000]])
//         }else if(price_1.checked){
//             get_data(undefined,[[1,499]])
//         }else if(price_1000.checked){
//             get_data(undefined,[[1000]])
//         }
//     }
// }
// price_1000.onchange=()=>{
//     if(price_1000.checked){   
//         if(price_1.checked && price_500.checked){     
//             get_data(undefined,[[1,499],[500,999],[1000]])
//         }else if(price_1.checked){
//             get_data(undefined,[[1,499],[1000]])
//         }else if(price_500.checked){
//             get_data(undefined,[[500,999],[1000]])
//         }else{
//             get_data(undefined,[[1000]])
//         }
//     }else{
//         if(price_1.checked && price_500.checked){     
//             get_data(undefined,[[1,499],[500,999]])
//         }else if(price_1.checked){
//             get_data(undefined,[[1,499]])
//         }else if(price_500.checked){
//             get_data(undefined,[[500,999]])
//         }
//     }
// }
// const filter_by_price=(price_array,data)=>{
//     let s=[]
//     for(let i=0;i<price_array.length;i++){
//         let x;
//         // console.log(price_array[i].length )
//         if(price_array[i][0].length>1 && i!=2){
//             x=data.filter((el)=>{
//                 try{
//                     if(el.discounted_price>=price_array[i][0][0] && el.discounted_price<=price_array[i][1][1]){
//                         return true
//                     }
//                 }catch(e){
//                     return false
//                 }
                
//             })
//         }s.push(x)
//         console.log(s)
//     }return s
// }


let women_filter =document.getElementById("c_women")
let men_filter =document.getElementById("c_men")

let children_filter =document.getElementById("c_children")
women_filter.onchange=()=>{
    if(women_filter.checked){
        category_filter[0]=true
    }else{
        category_filter[0]=false
    }
    localStorage.setItem("category_filter",JSON.stringify(category_filter))
    get_data()
}
men_filter.onchange=()=>{
    if( men_filter.checked){
        category_filter[1]=true
    }else{
        category_filter[1]=false
    }
    localStorage.setItem("category_filter",JSON.stringify(category_filter))
    get_data()
}
children_filter.onchange=()=>{
    if( children_filter.checked){
        category_filter[2]=true
    }else{
        category_filter[2]=false
    }
    localStorage.setItem("category_filter",JSON.stringify(category_filter))
    get_data()
}


