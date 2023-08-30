// Grab and store elements as variables
let checkoutIcon = document.querySelector("#shoppingCart");
let modal = document.querySelector("#modalBox");
let modalButton = document.querySelector("#modalButton");

let scrollPos = 0;

function checkPosition() {
    let windowY = window.scrollY;
    if (windowY > scrollPos) {
        checkoutIcon.classList.remove("element--hidden");
    } else if (windowY < 300) {
        checkoutIcon.classList.add("element--hidden");
        }
    scrollPos = windowY;
}

window.addEventListener("scroll", checkPosition);

checkoutIcon.addEventListener("click", () => {
    checkoutIcon.classList.add("element--hidden");
    modal.classList.remove("element--hidden");
});

modalButton.addEventListener("click", () => {
    checkoutIcon.classList.remove("element--hidden");
    modal.classList.add("element--hidden");
});