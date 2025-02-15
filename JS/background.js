const images = ["1.jpg", "2.jpg", "3.jpg"];

const choosenImage = images[Math.floor(Math.random() * images.length)];

/*const bgImage = document.createElement("img");

bgImage.src = `img/${choosenImage}`;

document.body.appendChild(bgImage);*/

document.body.style.backgroundImage = `url("img/${choosenImage}")`;

if(choosenImage === "3.jpg"){
    document.body.querySelector("#weather").style.color = "skyblue";
    document.body.querySelector("#quotes").style.color = "skyblue";
}