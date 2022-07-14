const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;

const arr2 = [2, 5, 1, 3, 6, 43, 12, 434, 90];

function async() {
    document.getElementById('demo7').innerHTML = "Have you clicked on something?"
}

setTimeout(async, 3000);

function sortarray() {
    document.getElementById('demo1').innerHTML = cars.sort();
}


function lengthofarr() {
    document.getElementById('demo2').innerHTML = cars.length;
}

function getmax() {
    document.getElementById("demo3").innerHTML = maximum_num(arr2);
}

function maximum_num(arr2) {
    let len = arr2.length;
    let maxnum = -Infinity;
    while (len--) {
        if (arr2[len] > maxnum) {
            maxnum = arr2[len];
        }
    }
    return maxnum;
}

function listView() {
    let text = "";
    for (let i = 0; i < cars.length; i++) {
        text += "---" + cars[i] + "<br>";
    }
    document.getElementById("demo4").innerHTML = text;
}

function Weekdays() {
    let day;
    switch (new Date().getDay()) {
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
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }
    document.getElementById('demo5').innerHTML = "Today is " + day;
}

function myCar() {
    var x = document.getElementById("selecting").value;
    document.getElementById("demo8").innerHTML = "You selected: " + x;

}

var currenttimmer;
function timer() {
    var timer = 11;
    currenttimmer = setInterval(function () {
        timer--;
        document.getElementById('demo8').innerHTML = timer;
    }, 1000);
}

function first() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('This is a promise');
        }, 11000)
    })
}
function callPromise() {
    timer();
    first().then((msg) => {
        clearInterval(currenttimmer);
        document.getElementById('demo8').innerHTML = msg;
    }).catch((e) => {
        clearInterval(currenttimmer);
        console.log(e);
    })

}
callPromise();