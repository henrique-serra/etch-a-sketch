const btn = document.querySelector("button");
const divContainer = document.querySelector("#container");

function getLayout(msg = "How many squares per side for the grid? (Min 2; Max 100)") {
    let layout = +prompt(msg);
    if (!layout) {
        if (isNaN(layout)) {
            layout = getLayout("Type only numbers between 2 and 100.");
        } else return;
    } else if (layout > 100) {
        layout = getLayout("You typed a number higher than 100. Choose a number between 2 and 100 of squares per side of the grid.");
    } else if (layout < 2) {
        layout = getLayout("You typed a number smaller than 2. Choose a number between 2 and 100 of squares per side of the grid.");
    }
    return layout
}

function generateRandomRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeBackgroundColor(square) {
    const randomColor = generateRandomRgb();
    square.style.backgroundColor = randomColor;
}

function increaseOpacity(square) {
    let opacity = +square.style.opacity;
    if (!opacity) {
        opacity = 0.1;
    } else {
        opacity = opacity == 1 ? 1 : opacity + 0.1;
    };
    square.style.opacity = opacity;
    return opacity;
}

function createSquares(n, row) {
    for (let index = 0; index < n; index++) {
        const square = document.createElement("div");
        square.style.width = `100%`;
        row.appendChild(square);
    }
}

function createRow(nSquares) {
    const row = document.createElement("div");
    row.classList.add("row");
    createSquares(nSquares, row);
    divContainer.appendChild(row);
}

function createGrid(nSquaresPerSide) {
    divContainer.innerHTML = "";
    for (let index = 0; index < nSquaresPerSide; index++) {
        createRow(nSquaresPerSide);
    }
    divContainer.style.border = "1px solid black";
}

btn.addEventListener("click", () => {
    let layout = getLayout();
    createGrid(layout);
})

let mouseDown = 0;
divContainer.onmousedown = (event) => {
    event.preventDefault();
    ++mouseDown;
}
divContainer.onmouseup = (event) => {
    event.preventDefault();
    --mouseDown;
}

divContainer.addEventListener("mouseover", (event) => {
    event.preventDefault();
    if (event.target.id === "container") return;
    if (mouseDown == 0) return;
    changeBackgroundColor(event.target);
    increaseOpacity(event.target);
})