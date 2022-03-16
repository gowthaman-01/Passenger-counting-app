let count = 0;
countElement = document.getElementById("count");
const increment = () => {
    count += 1;
    countElement.innerText = count;
}

let saved = [0, 0, 0];
let savedContent = document.getElementById("saved-content");
const toDisplay = (arr) => {
    return `Previous entries: ${arr[0]} - ${arr[1]} - ${arr[2]}`;
}
const save = () => {
        saved[0] = saved[1];
        saved[1] = saved[2]; 
        saved[2] = countElement.innerText;
        savedContent.innerText = toDisplay(saved);
        countElement.innerText = 0;
        count = 0;
}

