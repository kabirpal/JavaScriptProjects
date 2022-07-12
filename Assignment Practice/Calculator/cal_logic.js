let display = document.getElementById('cal_display');
buttons = document.querySelectorAll('button');
let screenValue = "";

for(item of buttons){
    item.addEventListener('click',(ekl)=>{
        buttonText = ekl.target.innerText;
        console.log(buttonText);
        screenValue += buttonText;
        display.value = screenValue;
    })
}


let slicing = screenValue.split(/[+,-,*,/]/);
if (slicing[1] =="+"){
    screenValue = slicing[0]+slicing[2]
    display.value = screenValue;
}
console.log(screenValue);