

let carousel_div=document.getElementById("So_carousel")

function slideshow(){

    let images=["https://www.technologyrecord.com/Portals/0/EasyDNNNews/10405/940443p512EDNmainimg-Unsplash_Burgess-Milner_retail_fashion_web.jpg","https://cdn11.bigcommerce.com/s-8ek7z3h3jn/images/stencil/960w/uploaded_images/expert-resize-1.jpg?t=1661507753","https://boutiqueeventsgroup.com.au/wp-content/uploads/2021/05/Places-to-buy-Best-Wedding-Engagement-Rings-in-New-Zealand-BOUTIQUE.jpg","https://imgsrv2.voi.id/8vvC4gJKi9z13ll-l8wxyDu8h_fNXf33bIPtXFfGVE8/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yMjAzMjYvMjAyMjEwMjAxNzI1LW1haW4uY3JvcHBlZF8xNjY2MjYxNTc4LmpwZw.jpg","https://www.pattersons.co.uk/blog/wp-content/uploads/2019/06/Pattersons-ktichen-1200x480.jpg"]
    
    let img=document.createElement("img")
    img.src=images[0]
    carousel_div.append(img)

    let i=1
    setInterval(function(){
        if(i==images.length)
        {
            i=0
        }

        img.src=images[i]
        carousel_div.append(img)
        i++
    },3000);

    
}

slideshow()