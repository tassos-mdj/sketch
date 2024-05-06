const container = document.querySelector(".container");
createGrid(16);

function createGrid(side) {
for (let j = 1; j <= side; j++){
    lineContainer = document.createElement("div");
    lineContainer.classList.add("linecontainer");

    for (let i = 1; i <= side; i++) {
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
        function random_rgba() {
            let o = Math.round, r = Math.random, s = 255;
            return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
        }
        
        let color = random_rgba();
        element.style.backgroundColor = color;
    });
});
}

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    container.textContent = '';
    let userSelection = prompt("Enter size from 1 to 100");
    if (userSelection > 100 || userSelection < 1) {
        alert("Out of range");
        createGrid(16);
        }
    else{
    createGrid(userSelection);
    }
});


