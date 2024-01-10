import "./index.scss";
import Notiflix from "notiflix";
import { getMenu } from "../../api/api";

async function getDataAndSaveToLocalStorage() {
  try {
    const data = await getMenu();

    localStorage.setItem("menuData", JSON.stringify(data));

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    Notiflix.Notify.failure("Error fetching data");
    return null;
  }
}

async function renderMenu() {
  const listContainer = document.querySelector(".cards-list");
  const menuData = await getDataAndSaveToLocalStorage();

  //Встановлення дефолтних значень за відсутності данних
  const menuList = menuData.map((item) => {
    const img = item.imageUrl ? item.imageUrl : "/src/assets/images/burger.png";
    const description = item.description
      ? item.description
      : "default description";
    const discount =
      item.discount !== undefined && item.discount !== null
        ? `-${item.discount}$`
        : "";

    //Створюємо прапорець для перевірки наявності знижки
    const hasDiscountPrice =
      item.discountPrice !== undefined && item.discountPrice !== null;

    // Округлення значень price та discountPrice до 1 символу після коми
    const formattedPrice = Number(item.price).toFixed(1);
    const formattedDiscountPrice = hasDiscountPrice
      ? Number(item.discountPrice).toFixed(1)
      : "";

    return `<li id="${item.id}" class="cards-list__item">
      <div class="list-item__img-container">
        <img class="list-item__card-img" src="${img}" alt="" />
      </div>
      <div class="list-item__card-description">
        <p class="list-item__card-name">${item.title}</p>
        <p class="list-item__card-weight">${item.weight}g</p>
        <div class="list-item__card-price-wrapper">
          <p class="list-item__card-price ${
            hasDiscountPrice ? "is-discount" : ""
          }">$ ${formattedPrice}</p>
          <p class="list-item__card-discountPrice ${
            hasDiscountPrice ? "" : "is-visible-discount"
          }">$${formattedDiscountPrice}</p>
        </div>
        <p class="list-item__card-description">${description}</p>
      </div>
      <button class="list-item__card-btn">add to cart</button>
      <p class="list-item__discount">${discount}</p>
    </li>`;
  });

  listContainer.insertAdjacentHTML("beforeend", menuList.join(""));

  // Додаємо слухача подій для кожної кнопки "add to cart"
  const addToCartButtons = document.querySelectorAll(".list-item__card-btn");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const itemId = button.closest(".cards-list__item").id;
      addToCart(itemId);
    });
  });
}

function addToCart(itemId) {
  const cartMenu = JSON.parse(localStorage.getItem("cartMenu")) || [];

  cartMenu.push(itemId);

  localStorage.setItem("cartMenu", JSON.stringify(cartMenu));

  Notiflix.Notify.info("Item added to cart:");
  console.log("Item added to cart:", itemId);
}

renderMenu();
