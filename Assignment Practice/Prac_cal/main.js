let arr = "";
const one = document.getElementById("one");
one.addEventListener('click', ()=>{
    addtoarray("1");
})

const two = document.getElementById("two");
two.addEventListener('click', ()=>{
    addtoarray("2");
})


const three = document.getElementById("three");
three.addEventListener('click', ()=>{
    addtoarray("3");
})

function addtoarray(str){
    arr = arr +str;
    console.log(arr);
}

