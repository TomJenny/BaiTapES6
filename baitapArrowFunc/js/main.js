//GLOBAL
const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

const getELE = id => document.querySelector(id);

const getArrayELE = id => document.querySelectorAll(id);

// show button color on website
const renderButtonColor = (defaultActive) => {
    let content = '';
    colorList.map((item) => {
        if (item == defaultActive) {
            content += `<button class="color-button ${item} active" onclick="changeColorHouse('${item}')"></button>`;
            getELE("#house").className = `house ${item}`;
        } else {
            content += `<button class="color-button ${item}" onclick="changeColorHouse('${item}')"></button>`;

        }
    });

    getELE("#colorContainer").innerHTML = content;

};

renderButtonColor("pallet");

// change color of house
const changeColorHouse = (color) => {

    getELE("#house").className = `house ${color}`;

    getArrayELE(".color-button").forEach(ele => {
        if (ele.classList.contains(color)) {
            ele.classList.add("active");
        } else {
            ele.classList.remove("active");
        }
    });
};
