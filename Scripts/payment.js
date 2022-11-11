

import {footer} from '../Components/footer.js'
document.getElementById('ak-footer').innerHTML=footer()
let proceed_btn=document.getElementById('ak-place-order-btn')
proceed_btn.onclick=()=>{
    UserDetails()
}
const UserDetails=()=>{
         let cart_number=document.getElementById('ak-cart-number').value;
         let account_holder=document.getElementById('ak-cart-holder').value
         let exp_monnth=document.getElementById('ak-cart-exp-month').value
         let exp_year=document.getElementById('ak-cart-exp-year').value
         let cvv=document.getElementById('ak-cart-cvv').value

        if(cart_number!=''&&account_holder!=""&&exp_monnth!=""&&exp_year!=""&&cvv!=""){
           alert('Congratulations! Order Succesfully Placed')
        }else{
            alert('Fill all details')
        }
}