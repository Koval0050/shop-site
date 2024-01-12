import "./index.scss";
import { Notify } from "notiflix";
import { updateCartCounter } from "../header";

const submitButton = document.querySelector(".submit-btn");
const cartTableBody = document.querySelector(".cart-table__body");

export function renderCartItems() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  if (cartItems.length === 0) {
    const cartIsEmpty = `<p class='cart-is-empty'>Cart is empty</p>`;
    cartTableBody.innerHTML = cartIsEmpty;
    return;
  }

  const cartList = cartItems.map((item) => {
    const price = item?.discountPrice ? item.discountPrice : item.price;
    return `<div class="cart-table__row">
    <div class="cart-table__cell cart-table__cell--title">${item.title}</div>
    <div class="cart-table__cell cart-table__cell--price">$${price.toFixed(
      2
    )}</div>
    <div class="cart-table__cell cart-table__cell--quantity">
        <button class="quantity-btn" data-action="decrease">-</button>
        <span class="quantity">${item.quantity}</span>
        <button class="quantity-btn" data-action="increase">+</button>
    </div>
    <div class="cart-table__cell">
        <button class="remove-btn">Remove</button>
    </div>
</div>
`;
  });

  cartTableBody.innerHTML = "";
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
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const modal = document.querySelector(".cart-overlay");
  // if (cartItems.length === 0) {
  //   Notify.failure("cart is empty");
  //   return;
  // }

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
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

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

    console.log("+1");
  } else if (action === "decrease" && quantity > 1) {
    quantity--;

    console.log("-1");
  }
  quantityElement.textContent = quantity;

  // Оновлення кількості товару в localStorage
  cartItems[rowIndex].quantity = quantity;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  updateTotalPrice();
}

function getTotalPrice() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  let total = 0;

  cartItems.forEach((item) => {
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
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const row = button.closest(".cart-table__row");
  const rowIndex = cartItems.findIndex(
    (item) =>
      item.title === row.querySelector(".cart-table__cell--title").textContent
  );

  // Видалення елементу з масиву та оновлення localStorage
  cartItems.splice(rowIndex, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  renderCartItems();
  row.remove();
  updateCartCounter();
  updateTotalPrice();
}

//Оформлння замовлення
function handleSubmitButtonClick() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const cartData = {
    items: cartItems,
    totalPrice: getTotalPrice(),
  };

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
