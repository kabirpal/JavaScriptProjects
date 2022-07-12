function funct1(){
    return new Promise(function(resolve,reject){
        setInterval(()=>{
            console.log("Your promise has been resolved");
        },1000);
    })
}

funct1().then(function(){
    console.log("resolved")
}).catch.log("")