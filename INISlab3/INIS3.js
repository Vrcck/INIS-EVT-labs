import {shirts} from "./shirts.js";

const container = document.createElement("div");
container.id = "container";
const content = document.getElementById("content");
content.appendChild(container);

shirts.forEach((shirt) => {
    const name = shirt.name;
    const nameP = document.createElement("p");
    nameP.textContent = name;

    const pictureSrc = shirt.default.front;
    const picture = document.createElement("img");
    picture.src = pictureSrc;

    const fb = document.createElement("div");
    fb.classList.add("fb");

    const colorP = document.createElement("p");

// предпросмотр
    const quickView = document.createElement("button");
    quickView.innerText = "Quick View";
    quickView.addEventListener("click", () => {
        if(document.querySelector(".mod-wind")) document.querySelector(".mod-wind").remove();

        const modWind = document.createElement("div")
        modWind.classList.add("mod-wind");

        const img = document.createElement("img");
        img.src = shirt.colors.white.front;
        img.alt = shirt.name;
        img.classList.add("front-img");

        const imgBack = document.createElement("img");
        imgBack.src = shirt.colors.white.back;
        imgBack.alt = shirt.name;
        imgBack.classList.add("back-img");

        const nameP = document.createElement("p");
        nameP.textContent = shirt.name;
        nameP.classList.add("mod-name");

        const priceP = document.createElement("p");
        priceP.textContent = shirt.price;
        priceP.classList.add("mod-price");

        const descP = document.createElement("p");
        descP.textContent = shirt.description;
        descP.classList.add("mod-des");

        const closeBtn = document.createElement("button");
        closeBtn.classList.add("close-btn");
        closeBtn.textContent = "Close";
        closeBtn.onclick = () => {
            modWind.remove();
        };
        modWind.appendChild(img);
        modWind.appendChild(imgBack);
        modWind.appendChild(nameP);
        modWind.appendChild(priceP);
        modWind.appendChild(descP);
        modWind.appendChild(closeBtn);

        const modWinDiv = document.getElementById('modwinddiv');
        modWinDiv.appendChild(modWind);
    })

    const seePage = document.createElement("button");
    seePage.innerText = "See Page";

    // подсчет цветов
    const colors = shirt.colors;
    const colorCount = Object.keys(colors).length;
    let isDifferent = true;
    let text = "";

    for (let i = 0; i < shirts.length; i++) {
        if (shirts[i] !== shirt) {
            const otherColors = shirts[i].colors;
            const otherColorsCount = Object.keys(otherColors).length;
            if (colorCount === otherColorsCount) {
                isDifferent = false;
                break;
            }
        }
    }

    if (isDifferent) {
        const colorWord = (colorCount === 1) ? "color": "colors";
        text = `Available in ${colorCount} ${colorWord}`;
    }

    colorP.textContent = text;
    
    fb.appendChild(picture);
    fb.appendChild(nameP);
    fb.appendChild(colorP);
    fb.appendChild(quickView);
    fb.appendChild(seePage);

    container.appendChild(fb);
})

