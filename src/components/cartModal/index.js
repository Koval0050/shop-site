import "./index.scss";
import { Notify } from "notiflix";
import { updateCartCounter } from "../header";

const submitButton = document.querySelector(".submit-btn");
const cartItems = document.querySelector(".cart-items");

export function renderCartItems() {
  const cartStorageItems =
    JSON.parse(localStorage.getItem("cartStorageItems")) || [];

  if (cartStorageItems.length === 0) {
    const cartIsEmpty = `<p class='cart-is-empty'>Cart is empty</p>`;
    cartItems.innerHTML = cartIsEmpty;
    return;
  }

  const cartList = cartStorageItems.map((item) => {
    const price = item?.discountPrice ? item.discountPrice : item.price;
    return `<div class="cart-item">
    <div class="cart-item__property cart-item__title">${item.title}</div>
    <div class="cart-item__property cart-item__price">$${price.toFixed(2)}</div>
    <div class="cart-item__property cart-item__quantity">
        <button class="quantity-btn" data-action="decrease">-</button>
        <span class="quantity">${item.quantity}</span>
        <button class="quantity-btn" data-action="increase">+</button>
    </div>
    <div class="cart-item__property">
        <button class="remove-btn">Remove</button>
    </div>
</div>`;
  });

  cartItems.innerHTML = "";
  cartItems.insertAdjacentHTML("beforeend", cartList.join(""));

  submitButton.addEventListener("click", handleSubmitButtonClick);
}

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest(".quantity-btn");
  if (button) {
    handleQuantityButtonClick(button);
  }
});

//Відкриття модалки
function openCartModal() {
  const modal = document.querySelector(".cart-overlay");

  updateTotalPrice();
  renderCartItems();

  modal.classList.remove("is-hidden");

  modal.addEventListener("click", closeCartModal);
}
//Закриття модалки
function closeCartModal(event) {
  const modal = document.querySelector(".cart-overlay");

  if (event.target === modal || event.target.classList.contains("close-btn")) {
    modal.classList.add("is-hidden");
    modal.removeEventListener("click", closeCartModal);
  }
}

//Функція для зміни кількості товару
function handleQuantityButtonClick(button) {
  const cartStorageItems =
    JSON.parse(localStorage.getItem("cartStorageItems")) || [];

  const action = button.dataset.action;
  const row = button.closest(".cart-item");
  const quantityElement = row.querySelector(".quantity");
  let quantity = parseInt(quantityElement.textContent);

  const rowIndex = cartStorageItems.findIndex(
    (item) => item.title === row.querySelector(".cart-item__title").textContent
  );
  if (action === "increase") {
    quantity++;
  } else if (action === "decrease" && quantity > 1) {
    quantity--;
  }
  quantityElement.textContent = quantity;

  cartStorageItems[rowIndex].quantity = quantity;
  localStorage.setItem("cartStorageItems", JSON.stringify(cartStorageItems));

  updateCartCounter();
  updateTotalPrice();
}

function getTotalPrice() {
  const cartStorageItems =
    JSON.parse(localStorage.getItem("cartStorageItems")) || [];

  let total = 0;

  cartStorageItems.forEach((item) => {
    const price = item.discountPrice ? item.discountPrice : item.price;
    total += price * item.quantity;
  });

  return total.toFixed(2);
}
//Оновлення загальної ціни
function updateTotalPrice() {
  const totalPriceElement = document.querySelector(".total-price");
  let total = getTotalPrice();

  totalPriceElement.textContent = `Total price: $${total}`;
}

//Видалення товару
function handleRemoveButtonClick(button) {
  const cartStorageItems =
    JSON.parse(localStorage.getItem("cartStorageItems")) || [];

  const row = button.closest(".cart-item");
  const rowIndex = cartStorageItems.findIndex(
    (item) => item.title === row.querySelector(".cart-item__title").textContent
  );

  // Видалення елементу з масиву та оновлення localStorage
  cartStorageItems.splice(rowIndex, 1);
  localStorage.setItem("cartStorageItems", JSON.stringify(cartStorageItems));

  renderCartItems();
  row.remove();
  updateCartCounter();
  updateTotalPrice();
}

//Оформлння замовлення
function handleSubmitButtonClick() {
  const cartStorageItems =
    JSON.parse(localStorage.getItem("cartStorageItems")) || [];

  const cartData = {
    items: cartStorageItems,
    totalPrice: getTotalPrice(),
  };

  if (cartData.items.length === 0) {
    Notify.failure("Cart is empty");
    return;
  }

  console.log("Замовлення: ", cartData);
  localStorage.removeItem("cartStorageItems");
  const modal = document.querySelector(".cart-overlay");

  modal.classList.add("is-hidden");
  modal.removeEventListener("click", closeCartModal);
  Notify.success("The order has been placed");
  updateCartCounter();
}

document.addEventListener("DOMContentLoaded", () => {
  const cartButton = document.querySelector(".header__cart-btn");
  cartButton.addEventListener("click", openCartModal);

  renderCartItems();
  updateTotalPrice();

  cartItems.addEventListener("click", (event) => {
    const removeButton = event.target.closest(".remove-btn");
    if (removeButton) {
      handleRemoveButtonClick(removeButton);
    }
  });
  submitButton.addEventListener("click", handleSubmitButtonClick);
});
