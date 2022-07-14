//data has been fetched from JSON file but slider is not working. Will solve this issue soon. 

const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach(
    (slide,index) =>{
        slide.style.left = `${index*100}%`
    }
)

const goNext = () =>{
    counter++
    if (counter>=4){
        counter = 0;
    }
    slideImage()
}

const goPrev = () =>{
    counter--
    if (counter<0){
        counter = 4
    }
    slideImage()
}


const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

const container = document.querySelector(".container");
const request = new XMLHttpRequest();
request.open('GET',"data.json");
request.send();

request.addEventListener('load',function(){
    //console.log(this.responseText)
    const data = JSON.parse(this.responseText);
    console.log(data.image1);
    const htmlData =`
    <div class="main">
    <img src="${data.image1}" class="slide" alt="image">
    <img src="${data.image2}" class="slide" alt="image">
    <img src="${data.image3}" class="slide" alt="image">
    <img src="${data.image4}" class="slide" alt="image">
    `;

    container.insertAdjacentHTML("afterbegin",htmlData)
})
