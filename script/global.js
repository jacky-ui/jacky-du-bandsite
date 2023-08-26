// Grab and store elements as variables
let checkoutIcon = document.querySelector("#shoppingCart");

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