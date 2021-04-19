const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];
const colorListLength = colorList.length;

const getELE = id => document.querySelector(id);

const getArrayELE = id => document.querySelectorAll(id);

const getClassELE = (id, className) => document.querySelector(id).classList.contains(className);

const renderButtonColor = () => {
    let content = '';
    colorList.map((item, index) => {
        if (index == 0) {
            content += `<button class="color-button ${item} active"></button>`;
        } else {
            content += `<button class="color-button ${item}"></button>`;

        }
    });

    getELE("#colorContainer").innerHTML = content;

};

renderButtonColor();


const changeColorHouse = () => {

    getArrayELE(".color-button").forEach(ele => {

        ele.addEventListener("click", function () {

            let color = colorList.filter((color) => {
                if (this.classList.contains(color)) {
                    return color;
                }
            });

            if (!getELE("#house").classList.contains(color)) {

                getArrayELE(".color-button").forEach(ele => {
                    ele.classList.remove("active");
                });

                ele.classList.add("active");

                getELE("#house").className = `house ${color}`;
            }
        });

    });
};

changeColorHouse();