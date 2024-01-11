import "./index.scss";

export function updateCartCounter() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartCounterElement = document.querySelector(".header__cart-btn-span");

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  cartCounterElement.textContent = totalItems.toString();
}

document.addEventListener("DOMContentLoaded", updateCartCounter);
