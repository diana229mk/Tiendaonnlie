// script.js

// Cart functionality
const cart = [];

// Add item to cart
function addToCart(item) {
    cart.push(item);
    console.log(`${item} has been added to the cart`);
}

// Remove item from cart
function removeFromCart(item) {
    const index = cart.indexOf(item);
    if (index > -1) {
        cart.splice(index, 1);
        console.log(`${item} has been removed from the cart`);
    } else {
        console.log(`${item} not found in the cart`);
    }
}

// Update item quantity in cart
function updateCart(item, quantity) {
    const index = cart.indexOf(item);
    if (index > -1) {
        cart[index].quantity = quantity;
        console.log(`Updated ${item} quantity to ${quantity}`);
    } else {
        console.log(`${item} not found in the cart`);
    }
}

// Example usage
// Add to cart
addToCart({product: 'Apple', quantity: 1});
// Remove from cart
removeFromCart('Apple');
// Update cart
updateCart('Apple', 3);