import {footer} from '../Components/footer.js'
document.getElementById('ak-footer').innerHTML=footer()
let proceed_btn=document.getElementById('ak-place-order-btn')
proceed_btn.onclick=()=>{
    UserDetails()
}
const UserDetails=()=>{
         let first_name=document.getElementById("ak-first-name").value;
         let last_name=document.getElementById("ak-last-name").value;
         let state=document.getElementById('ak-region').value
         let house_no=document.getElementById('ak-hs_no').value
         let city=document.getElementById('ak-city').value
         let pin_code=document.getElementById('ak-pin-code').value
         let phone_number=document.getElementById('ak-phone').value
         let cart_number=document.getElementById('ak-cart-number').value;
         let account_holder=document.getElementById('ak-cart-holder').value
         let exp_monnth=document.getElementById('ak-cart-exp-month').value
         let exp_year=document.getElementById('ak-cart-exp-year').value
         let cvv=document.getElementById('ak-cart-cvv').value
        if(first_name!=''&&last_name!=''&&state!=''&&house_no!=''&&pin_code!=""&&city!=''&&phone_number!=''&&cart_number!=''&&account_holder!=''&&exp_monnth!=""&&exp_year!=""&&cvv!=""){
            alert('Payment Succesful')
        }else{
            alert('Fill all details')
        }



}