// Your code goes here
const text = document.getElementById("text");

const changeP = () => {
    text.innerHTML = "This is really cool!"
}

document.addEventListener("DOMContentLoaded", function() {
    changeP();
});
