document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".day-btn");
    const displayBox = document.querySelector(".display-box");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const color = button.getAttribute("data-color");

            
            displayBox.style.background = color;
            displayBox.style.display = "block";

            
            setTimeout(() => {
                displayBox.style.opacity = "1";
            }, 50);
        });
    });
});
