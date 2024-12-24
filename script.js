// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("clickButton");
    const message = document.getElementById("message");

    button.addEventListener("click", function () {
        message.style.display = "block";
        alert("Button clicked!");
    });
});
