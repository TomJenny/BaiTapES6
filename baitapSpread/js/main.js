let getELE = id => document.querySelector(id);

let string = getELE(".heading").innerHTML.trim().replace(" ", "");
let characters = [...string];

const renderSpanCharacters = (characters) => {
    let content = '';
    characters.forEach(char => {
        content += `<span>${char}</span>`;
    });

    getELE(".heading").innerHTML = content;
}

renderSpanCharacters(characters);