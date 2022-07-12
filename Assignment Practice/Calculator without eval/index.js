var firstnumber;  
var secondnumber;  
var result;  
var operations;  

function numone() {  
    if (document.display_form.display_m.value == "0" || document.display_form.display_m.value == result) {  

        document.display_form.display_m.value = "1";  

    } else //if(document.display_form.display_m.value != "0")    
    {  
        documentdocument.display_form.display_m.value = document.display_form.display_m.value + "1";  
    }  

}  

function numtwo() {  

    if (document.display_form.display_m.value == "0" || document.display_form.display_m.value == result) {  

        document.display_form.display_m.value = "2";  

    } else //if(document.display_form.display_m.value != "0")    
    {  
        documentdocument.display_form.display_m.value = document.display_form.display_m.value + "2";  
    }  

}  

function numthree() {  

    if (document.display_form.display_m.value == "0" || document.display_form.display_m.value == result) {  

        document.display_form.display_m.value = "3";  

    } else //if(document.display_form.display_m.value != "0")    
    {  
        documentdocument.display_form.display_m.value = document.display_form.display_m.value + "3";  
    }  

}  

function numfour() {  

    if (document.display_form.display_m.value == "0" || document.display_form.display_m.value == result) {  

        document.display_form.display_m.value = "4";  

    } else //if(document.display_form.display_m.value != "0")    
    {  
        documentdocument.display_form.display_m.value = document.display_form.display_m.value + "4";  
    }  

}  

function numfive() {  

    if (document.display_form.display_m.value == "0" || document.display_form.display_m.value == result) {  

        document.display_form.display_m.value = "5";  

    } else //if(document.display_form.display_m.value != "0")    
    {  
        documentdocument.display_form.display_m.value = document.display_form.display_m.value + "5";  
    }  

}  

function numsix() {  

    if (document.display_form.display_m.value == "0" || document.display_form.display_m.value == result) {  

        document.display_form.display_m.value = "6";  

    } else //if(document.display_form.display_m.value != "0")    
    {  
        documentdocument.display_form.display_m.value = document.display_form.display_m.value + "6";  
    }  

}  

function numseven() {  

    if (document.display_form.display_m.value == "0" || document.display_form.display_m.value == result) {  

        document.display_form.display_m.value = "7";  

    } else //if(document.display_form.display_m.value != "0")    
    {  
        documentdocument.display_form.display_m.value = document.display_form.display_m.value + "7";  
    }  
}  

function numeight() {  

    if (document.display_form.display_m.value == "0") {  

        document.display_form.display_m.value = "8";  

    } else if (document.display_form.display_m.value == result) {  
        document.display_form.display_m.value = "8";  
    } else //if(document.display_form.display_m.value != "0")    
    {  
        documentdocument.display_form.display_m.value = document.display_form.display_m.value + "8";  
    }  

}  

function numnine() {  

    if (document.display_form.display_m.value == "0" || document.display_form.display_m.value == result) {  

        document.display_form.display_m.value = "9";  

    } else //if(document.display_form.display_m.value != "0")    
    {  
        documentdocument.display_form.display_m.value = document.display_form.display_m.value + "9";  
    }  

}  

function numzero() {  

    if (document.display_form.display_m.value == "0") {  

        document.display_form.display_m.value = "0";  

    } else if (document.display_form.display_m.value == result) {  
        document.display_form.display_m.value = "0";  
    } else //if(document.display_form.display_m.value != "0")    
    {  
        documentdocument.display_form.display_m.value = document.display_form.display_m.value + "0";  
    }  

}  

function numdobuzero() {  

    if (document.display_form.display_m.value == "0" || document.display_form.display_m.value == result) {  

        return;  

    } else //if(document.display_form.display_m.value != "0")    
    {  
        documentdocument.display_form.display_m.value = document.display_form.display_m.value + "00";  
    }  

}  

function clr() {  
    document.display_form.display_m.value = "0";  
    document.display_form.display_main.value = "";  
    return;  
}  

function operationplus() {  

    operation = "+";  
    firstnumber = parseInt(document.display_form.display_m.value);  
    document.display_form.display_m.value = "0";  
    document.display_form.display_main.value = firstnumber + operation;  
    //alert(firstnumber);    

}  

function operationmult() {  

    operation = "*";  
    firstnumber = parseInt(document.display_form.display_m.value);  
    document.display_form.display_m.value = "0";  
    document.display_form.display_main.value = firstnumber + operation;  

}  

function operationminus() {  

    operation = "-";  
    firstnumber = parseInt(document.display_form.display_m.value);  
    document.display_form.display_m.value = "0";  
    document.display_form.display_main.value = firstnumber + operation;  

}  

function operationdivid() {  

    operation = "/";  
    firstnumber = parseInt(document.display_form.display_m.value);  
    document.display_form.display_m.value = "0";  
    document.display_form.display_main.value = firstnumber + operation;  

}  

function operationperc() {  

    operation = "%";  
    firstnumber = parseInt(document.display_form.display_m.value);  
    document.display_form.display_m.value = "0";  
    document.display_form.display_main.value = firstnumber + operation;  

}  

function equalsto() {  

    secondnumber = parseInt(document.display_form.display_m.value);  

    if (operation == "+") {  
        result = firstnumber + secondnumber;  
    } else if (operation == "*") {  

        result = firstnumber * secondnumber;  

    } else if (operation == "-") {  

        result = firstnumber - secondnumber;  

    } else if (operation == "/") {  

        result = firstnumber / secondnumber;  

    } else if (operation == "%") {  

        if (document.display_form.display_m.value == "0") {  

            result = firstnumber / 100;  
            document.display_form.display_main.value = firstnumber + operation + "100";  
        } else if (document.display_form.display_m.value != "0") {  
            result = firstnumber / secondnumber * 100;  
            document.display_form.display_main.value = firstnumber + operation + secondnumber + "*100 = " + result;  
        }  
    } else if (operation == "^") {  

        for (var i = 0; i < secondnumber; i++) {  

            result = firstnumber * i;  
        }  


    }  
    document.display_form.display_m.value = "";  
    document.display_form.display_m.value = result.toString();  
    document.display_form.display_main.value = firstnumber + operation + secondnumber + " = " + result.toString();  
    return;  

}  

function sqrots() {  
    firstnumber = document.display_form.display_m.value;  
    result = Math.sqrt(parseInt(document.display_form.display_m.value));  
    document.display_form.display_m.value = result;  
    document.display_form.display_main.value = "sqrt(" + firstnumber + ") = " + result;  

}  

function operationraistop() {  

    operation = "^";  
    firstnumber = parseInt(document.display_form.display_m.value);  
    document.display_form.display_m.value = "0";  

}  