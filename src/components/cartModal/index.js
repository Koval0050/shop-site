import "./index.scss";
import { updateCartCounter } from "../header";

const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const submitButton = document.querySelector(".submit-btn");

function renderCartItems() {
  const cartTableBody = document.querySelector(".cart-table__body");

  const cartList = cartItems.map((item) => {
    return `<tr class="cart-table__row">
      <td class="cart-table__cell cart-table__cell--title">${item.title}</td>
      <td class="cart-table__cell cart-table__cell--price">$${item.price.toFixed(
        2
      )}</td>
      <td class="cart-table__cell cart-table__cell--quantity">
        <button class="quantity-btn" data-action="decrease">-</button>
        <span class="quantity">${item.quantity}</span>
        <button class="quantity-btn" data-action="increase">+</button>
      </td>
      <td class="cart-table__cell">
        <button class="remove-btn">Remove</button>
      </td>
    </tr>`;
  });

  cartTableBody.insertAdjacentHTML("beforeend", cartList.join(""));

  cartTableBody.addEventListener("click", (event) => {
    const button = event.target.closest(".quantity-btn");
    if (button) {
      handleQuantityButtonClick(button);
    }
  });

  submitButton.addEventListener("click", handleSubmitButtonClick);
}

//Відкриття модалки
function openCartModal() {
  const modal = document.querySelector(".cart-overlay");
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
  const action = button.dataset.action;
  const row = button.closest(".cart-table__row");
  const quantityElement = row.querySelector(".quantity");
  let quantity = parseInt(quantityElement.textContent);

  const rowIndex = cartItems.findIndex(
    (item) =>
      item.title === row.querySelector(".cart-table__cell--title").textContent
  );

  if (action === "increase") {
    quantity++;
    updateTotalPrice();
  } else if (action === "decrease" && quantity > 1) {
    quantity--;
    updateTotalPrice();
  }

  quantityElement.textContent = quantity;

  // Оновлення кількості товару в localStorage
  cartItems[rowIndex].quantity = quantity;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function getTotalPrice() {
  let total = 0;

  cartItems.forEach((item) => {
    total += item.price * item.quantity;
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
  const row = button.closest(".cart-table__row");
  const rowIndex = cartItems.findIndex(
    (item) =>
      item.title === row.querySelector(".cart-table__cell--title").textContent
  );

  // Видалення елементу з масиву та оновлення localStorage
  cartItems.splice(rowIndex, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  row.remove();
  updateCartCounter();//Оновлюємо візуально кількість у корзині
  updateTotalPrice();
}

//Оформлння замовлення
function handleSubmitButtonClick() {
  // Збірка усіх товарів у один об'єкт
  const cartData = {
    items: cartItems,
    totalPrice: getTotalPrice(),
  };

  // Виведення у консоль
  console.log("Замовлення: ", cartData);
}

document.addEventListener("DOMContentLoaded", () => {
  const cartButton = document.querySelector(".header__cart-btn");
  cartButton.addEventListener("click", openCartModal);

  renderCartItems();
  updateTotalPrice();

  const cartTableBody = document.querySelector(".cart-table");
  cartTableBody.addEventListener("click", (event) => {
    const removeButton = event.target.closest(".remove-btn");
    if (removeButton) {
      handleRemoveButtonClick(removeButton);
    }
  });
  submitButton.addEventListener("click", handleSubmitButtonClick);
});
