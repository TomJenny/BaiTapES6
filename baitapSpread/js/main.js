let getELE = id => document.querySelector(id);

let string = getELE(".heading").innerHTML.replace(" ", "");
let characters = [...string];

const renderSpanCharacters = (characters) => {
    let content = '';
    characters.map(char => {
        content += `<span>${char}</span>`;
    });

    getELE(".heading").innerHTML = content;
}

renderSpanCharacters(characters);