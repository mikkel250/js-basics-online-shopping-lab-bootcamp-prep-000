var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemPrice = Math.floor(Math.random() * 100);
 var itemName = item;
 cart.push( { [itemName]: itemPrice} );
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}


function viewCart() {
  // write your code here
  var cartItemName = Object.keys(cart);  // this creates an array with all of the keys (as strings)
var cartItemPrice = cart[cartItemName]; // this gets the values from the keys
  var i = 0;
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else if (cart.length === 1) {
    // code for 1 item
    // for (i = 0; i < cart.length; i++) {
      console.log(`In your cart, you have ` + cartItemName[0] + ` at $` + cartItemPrice[0] + `.`);
      
    }
    else if (cart.length === 2) {
      // code for 2 items
       for (i = 0; i < cart.length; i++) {
        console.log(`In your cart, you have ${cartItemName[i]} at $${cartItemPrice[i]}, and ${cartItemName[i]} at $${cartItemPrice[i]}.`);
       }
    }
    else {
      // code for 3+ items
      for (i = 0; i < cart.length; i++) {
      console.log(`In your cart, you have ${cartItemName[i]} at $${cartItemPrice[i]}, ${cartItemName[i]} at $${cartItemPrice[i]}, and ${cartItemName[i]} at $${cartItemPrice[i]}.`);
      }
    }
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
