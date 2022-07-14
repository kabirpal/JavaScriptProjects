var prev = document.getElementById('prev');
var next = document.getElementById('next');

var arr=['Image/img1.jpg','Image/img2.jpg','Image/img3.jpg','Image/img4.jpg','Image/img5.jpg'];
var i =0;
var k = "";
subbtn.addEventListener('click', function(){
    k = document.getElementById('num').value
    if(k>arr.length){
        document.getElementById('message').innerHTML="Enter a number between 1-5";
        k = 1;
    }
    
})
// function submitbtn(){
    
    
// }

next.addEventListener('click',function(){
    i++;
    if(i>k-1){
        i=0;
    }
    document.getElementById('image').src = arr[i];
});

prev.addEventListener('click',function(){
    i--;
    if(i<=0){
        i =k-1;
    }
    document.getElementById('image').src = arr[i];
});
