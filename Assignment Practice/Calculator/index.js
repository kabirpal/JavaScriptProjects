let display = document.getElementById('cal_display');
buttons = document.querySelectorAll('button');
let screenValue = "";

for(item of buttons){
    item.addEventListener('click',(ekl)=>{
        buttonText = ekl.target.innerText;
        console.log(buttonText);
        if(buttonText=='C'){
            screenValue = "";
            display.value = screenValue;
        }
        else if(buttonText=='='){
            display.value = eval(screenValue);
        }

        else{
            screenValue += buttonText;
            display.value = screenValue;
        }
    })
}