function display(some){
    console.log(some);
}

let myPromise = new Promise(function(myResolve, myReject){
    let x = 90;

    if (x==0){
        myResolve('OK');
    }
    else{
        myReject('Error');
    }
});

myPromise.then(
    function(value) {display(value);},
    function(error) {display(error);}
);