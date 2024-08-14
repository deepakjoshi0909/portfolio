const words = ['Frontend Developer', 'Web Designer', 'Video Editor'];


const element = document.getElementById('element');

let wordIndex = 0;
let direction = 1;

function typeText(){
    if(wordIndex === words.length){
        wordIndex = 0;
    }
    const currWord = words[wordIndex];
    const currText = element.textContent;

    if(currText.length === 0 && direction === -1){
        wordIndex++;
        direction = 1;
        setTimeout(typeText,1000);
        return;
    }
    if(currText.length === currWord.length && direction === 1){
        direction = -1;
        setTimeout(typeText,1000);
        return;
    }
    element.textContent = currWord.substring(0, currText.length + direction); 
    setTimeout(typeText, 100); 
}

window.onload = typeText;
