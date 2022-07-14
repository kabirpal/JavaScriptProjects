function userdata(){
    let firstname, lastname, email, pswd;
    firstname = document.getElementById('fnameid').value;
    lastname = document.getElementById('lnameid').value;
    email = document.getElementById('emailid').value;
    pswd = document.getElementById('pass').value;

    if(firstname===""&& email==="" && pswd===""){
        alert("Please fill the form");
        return
    }

    let usersdata = new Array();
    usersdata=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(usersdata.some((v)=>{return v.email==email}))
    {
    alert("Email already exist. Please sign in.");    
    }
    else
    {
        usersdata.push({
        "firstname":firstname,
        "lastname":lastname,
        "email":email,
        "pswd":pswd
    })
localStorage.setItem("users",JSON.stringify(usersdata));
alert("Account created successfully. Please login")
}

}