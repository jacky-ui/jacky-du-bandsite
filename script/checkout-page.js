// Grab and initialize values
let cartSubheader = document.querySelector("#cartSubheader");
let cartPara = document.querySelector("#cartPara");
let cartItemContainer = document.querySelector(".cart");
let cartSubtotalText = document.querySelector(".cart__subtotal");

localStorage.setItem("cartItem", 0);

// Grab variable from localStorage
let customerCart = localStorage.cartItems;
console.log(customerCart);

function editText(element, text) {
    element.innerText = text;
};

function removeClass(element, className) {
    element.classList.remove(className);
};

function addClass(element, className) {
    element.classList.add(className);
};

if(customerCart === 0) {
    editText(cartSubheader, "Your shopping cart is empty");
} else if(customerCart > 0) {
    editText(cartSubheader, "Your shopping cart");
    addClass(cartPara, "element--hidden");
    removeClass(cartItemContainer, "element--hidden");
    removeClass(cartSubtotalText, "element--hidden");
};