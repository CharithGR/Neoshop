let form =document.getElementById("c_login_form")
form.onsubmit=(e)=>{
    e.preventDefault();
    let email =form.c_email.value
    let password =form.c_password.value
    get_user_data(email,password)
}

const get_user_data=async (email,password) =>{
    let response=await fetch(`https://shrouded-beyond-89498.herokuapp.com/SignUp`)
    let data = await response.json()
    console.log(data)
    let is_logged_in=false
    data.forEach((el)=>{
        if(el.email==email && el.password==password){
            localStorage.setItem("Current_User",JSON.stringify(el))
            alert("Login successful")
            is_logged_in=true
            localStorage.setItem("is_logged_in",is_logged_in)
            return
        }
    })
    if(!is_logged_in){
    alert("Invalid email or password")
    }
     

}
