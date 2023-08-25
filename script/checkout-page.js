// Grab and initialize values
let cartSubheader = document.querySelector("#cartSubheader");
let cartPara = document.querySelector("#cartPara");

// Grab variable from localStorage
let customerCart = localStorage.cartItems;
console.log(customerCart);

function editText(element, text) {
    element.innerText = text;
};

if(customerCart === 0) {
    editText(cartSubheader, "Your shopping cart is empty")
} else if(customerCart > 0) editText(cartSubheader, "Your shopping cart");