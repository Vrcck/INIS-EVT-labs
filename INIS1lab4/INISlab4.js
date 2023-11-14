import {shirts} from "../inislab3/shirts.js";


//localStorage
const shirt = JSON.parse(localStorage.getItem('shirt'));


//container & content
const container = document.createElement("div");
container.id = "container-d";
const contentDiv = document.getElementById("content");
contentDiv.appendChild(container);


//name
const name = shirt.name;
const nameP = document.createElement("h1");
nameP.textContent = name;


//img
let currentColor = "white";
const imgSrc = shirt.colors[currentColor].front;
const img = document.createElement("img");
img.classList.add('img-shirt-details');
img.src = imgSrc;


//div for img
const divImg = document.createElement("div");
divImg.classList.add('div-shirt-details-img');
divImg.appendChild(img);


//price
const priceP = document.createElement("p");
priceP.textContent = shirt.price;
priceP.classList.add("price");


//description
const descP = document.createElement("p");
descP.textContent = shirt.description;
descP.classList.add("des");


//colores count
const colors = shirt.colors;
const colorsCount = Object.keys(colors).length;
let isDifferent = true;
let text = "";
for (let i = 0; i < shirt.length; i++) {
    if (shirt[i] !== shirt) {
        const otherColors = shirts[i].colors;
        const otherColorsCount = Object.keys(otherColors).length;

        if (colorsCount === otherColorsCount) {
            isDifferent = false;
            break;
        }
    }
}
if (isDifferent) {
    const colorsWord = (colorsCount === 1) ? "Цвет" : "Цвета";
    text = `${colorsWord}: `;
}
const textAv = document.createElement("p");
textAv.classList.add('p-av-shirt-det');
textAv.textContent = text;


//colores buttons
const colorsKeys = Object.keys(colors);
const buttonsClr = document.createElement("div");
buttonsClr.classList.add("div-colores-buttons");
for (let i = 0; i < colorsKeys.length; i++) {
    const colorKey = colorsKeys[i];
    const colorButton = document.createElement("button");
    colorButton.classList.add("color-button");
    colorButton.textContent = colorKey;
    colorButton.style.backgroundColor = colorKey;
    colorButton.id = colorKey;
    buttonsClr.appendChild(colorButton);
    colorButton.addEventListener("click", function() {
        currentColor = colorKey;
        const image = colors[colorKey][currentSide];
        img.src = image;
    });
}

//div for text and buttons color
const buttonsClrText = document.createElement("div");
buttonsClrText.classList.add("div-colores-buttons-text");
buttonsClrText.appendChild(textAv);
buttonsClrText.appendChild(buttonsClr);


//front back buttons
let currentSide = 'front';
const buttonsFrB = document.createElement("div");
buttonsFrB.classList.add('div-front-back');
const frontButton = document.createElement("button");
frontButton.classList.add("front-button");
frontButton.textContent = `Front`;
const backButton = document.createElement("button");
backButton.classList.add("back-button");
backButton.textContent = `Back`;
buttonsFrB.appendChild(frontButton);
buttonsFrB.appendChild(backButton);
backButton.addEventListener("click", function() {
    currentSide = 'back';
    const image = colors[currentColor].back;
    img.src = image;
});
frontButton.addEventListener("click", function() {
    currentSide = 'front';
    const image = colors[currentColor].front;
    img.src = image;
});


//div front back buttons and text
const textFrB = document.createElement("p");
textFrB.classList.add('p-av-shirt-det');
textFrB.textContent = 'Сторона:';
const buttonsFrBText = document.createElement("div");
buttonsFrBText.classList.add("div-frb-buttons-text");
buttonsFrBText.appendChild(textFrB);
buttonsFrBText.appendChild(buttonsFrB);



//div for other elements
const divDesc = document.createElement("div");
divDesc.classList.add('div-desc');
divDesc.appendChild(nameP);
divDesc.appendChild(priceP);
divDesc.appendChild(descP);
divDesc.appendChild(buttonsClrText);
divDesc.appendChild(buttonsFrBText);
  

//appendChild container
container.appendChild(divImg);
container.appendChild(divDesc);