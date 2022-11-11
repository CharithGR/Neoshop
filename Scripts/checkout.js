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
         let select_card_type=document.getElementById('ak-select-card-type').value

        if(first_name!=''&&last_name!=''&&state!=''&&house_no!=''&&pin_code!=""&&city!=''&&phone_number!=''&&select_card_type!=''){
            window.location.href='payment.html'
        }else{
            alert('Fill all details')
        }
}