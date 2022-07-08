const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;

    const arr2 = [2,5,1,3,6,43,12,434,90];

    function sortarray(){
    document.getElementById('demo1').innerHTML = cars.sort();
    }


    function lengthofarr(){
    document.getElementById('demo2').innerHTML = cars.length;
    }

    function getmax(){
    document.getElementById("demo3").innerHTML = maximum_num(arr2);
    }

    function maximum_num(arr2){
    let len = arr2.length;
    let maxnum = -Infinity;
    while(len--){
        if(arr2[len]>maxnum){
            maxnum=arr2[len];
        }
    }
    return maxnum;
    }

    function listView(){
        let text = "";
        for(let i = 0; i<cars.length;i++){
            text += "---"+cars[i] + "<br>";
        }
        document.getElementById("demo4").innerHTML = text;
    }

    function Weekdays(){
    let day;
    switch(new Date().getDay()){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thurday";
            break;
        case 5:
            day ="Friday";
            break;
        case 6:
            day ="Saturday";
            break;
    }
    document.getElementById('demo5').innerHTML = "Today is "+ day;
    }
































// const cars = ["Saab", "Volvo", "BMW"];
// document.getElementById("demo").innerHTML = cars;

// const arr2 = [2,5,1,3,6,43,12,434,90];
// document.getElementById('demo4').innerHTML = maximum_num(arr2);

// function creatingarr(){
//     const arr1 = ['samsung','apple','vivo','motorola'];
//     document.getElementById('demo3').innerHTML = arr1;
// }

// function sortarray(){
//     document.getElementById('demo1').innerHTML = cars.sort();
// }

// function lengthofarr(){
//     document.getElementById('demo2').innerHTML = cars.length;
// }

// function listView(){
//     let text;
//     for(let i = 0; i<cars.length;i++){
//         text += cars[i] + "<br>";
//     }
//     document.getElementById("demo7").innerHTML = text;
// }

// function maximum_num(arr2){
//     let len = arr2.length;
//     let maxnum = -Infinity;
//     while(len--){
//         if(arr2[len]>maxnum){
//             maxnum=arr2[len];
//         }
//     }
//     return maxnum;
// }

// function Weekdays(){
//     let day;
//     switch(new Date().getDay()){
//         case 0:
//             day = "Sunday";
//             break;
//         case 1:
//             day = "Monday";
//             break;
//         case 2:
//             day = "Tuesday";
//             break;
//         case 3:
//             day = "Wednesday";
//             break;
//         case 4:
//             day = "Thurday";
//             break;
//         case 5:
//             day ="Friday";
//             break;
//         case 6:
//             day ="Saturday";
//             break;
//     }

//     document.getElementById('demo6').innerHTML = day;
// }

