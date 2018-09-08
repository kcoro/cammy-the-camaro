var pics = [
    "imgs/2017-Chevrolet-Camaro-SS-1LE-1.jpg",  //0
    "imgs/2017-Chevrolet-Camaro-SS-1LE-2.jpg",  //1
    "imgs/2017-Chevrolet-Camaro-SS-1LE-5.jpg",  //2
    "imgs/2017-Chevrolet-Camaro-SS-1LE-14.jpg"  //3
];

var imgChange = document.querySelector("button");
var imgSource = document.querySelector("img");
var counter = 1;

imgChange.addEventListener("click", function(){
    if(counter === 4){
        counter = 0;
    }
    imgSource.src = pics[counter]
    counter = counter + 1;
});
