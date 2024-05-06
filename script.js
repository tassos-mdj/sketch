const container = document.querySelector(".container");

for (let j = 1; j < 17; j++){
    lineContainer = document.createElement("div");
    lineContainer.classList.add("linecontainer");

    for (let i = 1; i < 17; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("innerdiv");
        newDiv.style.flex = '1 0 auto';
        newDiv.style.border = '1px solid black';
        newDiv.style.aspectRatio = '1 / 1';
        lineContainer.appendChild(newDiv);
    }

    container.appendChild(lineContainer);
}

const innerDivs = document.querySelectorAll(".innerdiv");

innerDivs.forEach( (element) => {
    element.addEventListener("mouseenter", () => {
        element.style.backgroundColor = "orchid";
    });
});
