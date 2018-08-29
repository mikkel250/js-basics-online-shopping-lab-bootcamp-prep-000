var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var randomPrice = Math.floor((Math.random() * 100) + 1);
 var itemHash = { itemName: item, itemPrice: randomPrice };
 cart.push(itemHash);
 console.log(`${cart[cart.length -1].itemName} has been added to your cart.`);
 viewCart();
}



function viewCart() {
  // write your code here.
  if (cart.length < 1) {
    console.log("Your shopping cart is empty.");
  }
  else if (cart.length < 2) {
    // code for 1 item   
      console.log(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`);
    }
    else if (cart.length < 3) {
      // code for 2 items
      var medCart = [`In your cart, you have `];
      for (i = 0; i < cart.length - 1; i++) {   
      medCart.push(`${cart[i].itemName} at $${cart[i].itemPrice} `);     
       }
       console.log(`${medCart.join("")}and ${cart[cart.length -1].itemName} at $${cart[cart.length -1].itemPrice}.`);
     }
    else {
      // code for 3+ items
      var bigCart = [`In your cart, you have `];
      for (i = 0; i < cart.length - 1; i++) {   
      bigCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}, `);
      }
       console.log(`${bigCart.join("")}and ${cart[cart.length -1].itemName} at $${cart[cart.length -1].itemPrice}.`);
    }
}

function total() {
  // write your code here
  var totalCart = 0;
      for (i = 0; i < cart.length; i++) {   
      totalCart += (cart[i].itemPrice);
      }
      return totalCart;
}

// this one may need some work - it's returning the else statement
function removeFromCart(item) {
  // write your code here
  var present = false;  // flag to set if item is present
  for (i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      present = true; 
      cart.splice(i, 1);
      viewCart();
      present = false;
    }
    else if  (present === false) {
      console.log("That item is not in your cart.");
      viewCart();
    }    
  }
}

// the if is running even when the cardnumber is undefined
function placeOrder(cardNumber) {
  // write your code here
  if (typeof cardNumber === 'undefined' || cardNumber === null) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
