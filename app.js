const btn = document.querySelector("button");
const divContainer = document.querySelector("#container");

function getLayout(msg = "How many squares per side for the grid? (Min 2; Max 100)") {
    const layout = +prompt(msg);
    if (!layout) {
        if (isNaN(layout)) {
            getLayout("Type only numbers between 2 and 100.");
            return;
        } else return;
    } else if (layout > 100) {
        getLayout("You typed a number higher than 100. Choose a number between 2 and 100 of squares per side of the grid.");
        return;
    } else if (layout < 2) {
        getLayout("You typed a number smaller than 2. Choose a number between 2 and 100 of squares per side of the grid.");
        return;
    }
    return layout;
}

btn.addEventListener("click", () => {
    let layout = getLayout();
    console.log(layout);
})