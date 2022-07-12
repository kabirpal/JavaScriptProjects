function display(some){
    console.log(some)
}

function callb(){
    display("WORLD");
}

function calla(){
    display("HELLO");
}

calla();
callb();

//callback function

function callbackfun(){
    let z = x+y;
    display(z)
}

function callbackfun1(a,b,display){
    let c = a-b;
    display(c);
}

function callbackfun2(a,b,display){
    display(a+" "+b);
}

let x = 9
let y = 8
callbackfun(x,y,display);
callbackfun1(10,8,display);
callbackfun2('Hello','world',display);