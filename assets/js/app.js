const textElement = document.querySelector('.heading');
const text = ["First line of the heading.", "This is the Second Line.", "And this is the Third Line of the heading."];
let index = 0;
const words = text[index].split(' ');
function type() {
    if (index < words.length) {
        textElement.textContent += words[index] + ' ';
        index++;
        setTimeout(type, 500);
    }
}

type();
