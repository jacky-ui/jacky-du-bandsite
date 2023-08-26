// Grab and initialize values
let cartSubheader = document.querySelector("#cartSubheader");
let cartPara = document.querySelector("#cartPara");
let cartItemContainer = document.querySelector(".cart");

// Grab variable from sessionStorage
let customerCart = sessionStorage.cartItems;
console.log(customerCart);
console.log(cartItemContainer);

function editText(element, text) {
    element.innerText = text;
};

function removeClass(element, className) {
    element.classList.remove(className);
}

if(customerCart === 0) {
    editText(cartSubheader, "Your shopping cart is empty")
} else if(customerCart > 0) {
    editText(cartSubheader, "Your shopping cart");
    removeClass(cartItemContainer, "element--hidden");
};