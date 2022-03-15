let count = 0;
countElement = document.getElementById("count");
const increment = () => {
    count += 1;
    countElement.innerText = count;
}