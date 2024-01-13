import "./index.scss";
import Notiflix from "notiflix";
import { getMenu } from "../../api/api";
import { updateCartCounter } from "../header";

Notiflix.Notify.init({
  position: "left-top", // 'right-top' - 'right-bottom' - 'left-top'
  fontSize: "16px",
  closeButton: false,
  success: {
    background: "#ffc633",
    textColor: "#fff",
    childClassName: "notiflix-notify-success",
    notiflixIconColor: "rgba(100,255,100,1)",
  },
});

async function renderProductCards() {
  const listContainer = document.querySelector(".cards-list");
  const preLoader = document.querySelector(".preloader");
  const menuItems = await getMenu();
  preLoader.classList.add("is-hidden");

  //Встановлення дефолтних значень за відсутності данних
  const menuList = menuItems.map((item) => {
    const img = item.imageUrl ? item.imageUrl : "/src/assets/images/burger.png";
    const description = item.description ? item.description : "";

    const discount = item?.discount ? `-${item.discount}$` : "";

    //Створюємо прапорець для перевірки наявності знижки
    const hasDiscountPrice = item?.discountPrice;

    // Округлення значень price та discountPrice до 2 символу після коми
    const formattedPrice = Number(item.price).toFixed(2);
    const formattedDiscountPrice = hasDiscountPrice
      ? Number(item.discountPrice).toFixed(2)
      : "";

    return `<li id="${item.id}" class="cards-list__item">
<div class="list-item__card-wrapper">
        <div class="list-item__img-container">
          <img class="list-item__card-img" src="${img}" alt="" />
        </div>
        <div class="list-item__card-info">
          <h4 class="list-item__card-name">${item.title}</h4>
          <p class="list-item__card-weight">${item.weight}g</p>
          <div class="list-item__card-price-wrapper">
            <p class="list-item__card-price ${
              hasDiscountPrice ? "is-discount" : ""
            }">$ ${formattedPrice}</p>
            <p class="list-item__card-discountPrice ${
              hasDiscountPrice ? "" : "is-visible"
            }">$${formattedDiscountPrice}</p>
          </div>
          <p class="list-item__card-description ${
            item.description ? "" : "is-visible"
          }">${description}</p>
        </div>
        <p class="list-item__discount">${discount}</p>
</div>
      <button class="list-item__card-btn">add to cart</button>
    </li>`;
  });

  listContainer.insertAdjacentHTML("beforeend", menuList.join(""));

  // Cлухач подій для контейнера з усіма кнопками "add to cart"
  listContainer.addEventListener("click", (event) => {
    const addToCartBtn = event.target.closest(".list-item__card-btn");

    if (addToCartBtn) {
      const itemId = addToCartBtn.closest(".cards-list__item").id;
      const item = menuItems.find((item) => item.id === itemId);
      addToCart(item);
    }
  });
}

function addToCart(item, quantity = 1) {
  const cartItems = JSON.parse(localStorage.getItem("cartStorageItems")) || [];

  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  if (!existingItem) {
    cartItems.push({ ...item, quantity });

    localStorage.setItem("cartStorageItems", JSON.stringify(cartItems));

    updateCartCounter();

    Notiflix.Notify.success(`${item.title} added to cart`);
    console.log("Item added to cart:", item);
  } else {
    existingItem.quantity += 1;

    localStorage.setItem("cartStorageItems", JSON.stringify(cartItems));
    Notiflix.Notify.success(`Number of ${item.title} in the basket: ${existingItem.quantity}`);

    updateCartCounter();
  }
}

renderProductCards();
