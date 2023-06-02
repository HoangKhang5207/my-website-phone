if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var removeCartItemButton = document.getElementsByClassName("btn-remove");
  for (var i = 0; i < removeCartItemButton.length; i++) {
    var button = removeCartItemButton[i];
    button.addEventListener("click", removeCartItem);
  }

  var incrementButton = document.getElementsByClassName("plus");
  var decrementButton = document.getElementsByClassName("minus");
  //INCREMENT
  for (var i = 0; i < incrementButton.length; i++) {
    var button = incrementButton[i];
    button.addEventListener("click", incrementAndQuantity);
  }

  //DECREMENT
  for (var i = 0; i < decrementButton.length; i++) {
    var button = decrementButton[i];
    button.addEventListener("click", decrementAndQuantity);
  }

  var addToCartButton = document.getElementsByClassName("shop-item-button")[0];
  addToCartButton.addEventListener("click", addToCartClicked);
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.parentElement.remove();
  updateCartTotal();
}

function incrementAndQuantity(event) {
  var buttonClicked = event.target;
  var input = buttonClicked.parentElement.children[1];
  var inputValue = input.value;
  var newValue = parseInt(inputValue) + 1;
  input.value = newValue;
  updateCartTotal();
}

function decrementAndQuantity(event) {
  var buttonClicked = event.target;
  var input = buttonClicked.parentElement.children[1];
  var inputValue = input.value;
  var newValue = parseInt(inputValue) - 1;
  if (newValue >= 1) {
    input.value = newValue;
    updateCartTotal();
  } else {
    alert("SỐ LƯỢNG ĐÃ ĐẠT ĐẾN MỨC TỐI THIỂU");
  }
}

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement.parentElement.parentElement;
  var productName = shopItem.children[1].querySelector(".pro-name").innerText;
  var productPrice = shopItem.children[1]
    .querySelector(".pro-price")
    .querySelector(".pro-price-new").innerText;
  var productImage = shopItem.children[0].querySelector('#main-img').src;
  addItemToCart(productName, productPrice, productImage);
}

function addItemToCart(productName, productPrice, productImage) {
    var cartRow = document.createElement('tr');
    cartRow.innerText = productName + productPrice + productImage;
    var cartItems = document.getElementsByClassName('cart-items')[0];
    cartItems.append(cartRow);
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseInt(
      priceElement.innerText.replace("₫", "").replaceAll(",", "")
    );
    var quantity = parseInt(quantityElement.value);
    total = total + quantity * price;
  }
  var cartTotals = document.getElementsByClassName("cart-total-price");
  for (var i = 0; i < cartTotals.length; i++) {
    var carTotalPrice = cartTotals[i];
    carTotalPrice.innerText = total.toLocaleString("en-US") + " ₫";
  }
}
