function userdata(){
    let email, pswd;
    email = document.getElementById('emailid').value;
    pswd = document.getElementById('pass').value;

    let usersdata = new Array();
    usersdata=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    function url(){
        window.location.assign("http://127.0.0.1:8887/");
    }
    if(usersdata.some((v)=>{
        return v.email==email && v.pswd==pswd}))
    {
        url();
        alert('Login pass')
        //window.location.href="Assignment Practice\GalleryView4\index.html"
    }
    else
    {
        alert("Email or password incorrect. Please try again.");
    }
}