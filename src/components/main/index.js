import "./index.scss";

function filterCards(searchTerm) {
  const cards = document.querySelectorAll(".cards-list__item");

  cards.forEach((card) => {
    const cardName = card
      .querySelector(".list-item__card-name")
      .textContent.toLowerCase();

    if (cardName.includes(searchTerm)) {
      card.classList.remove("is-visible");
    } else {
      card.classList.add("is-visible");
    }
  });
}

const searchInput = document.querySelector(".main__search-input");

searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase().trim();
  filterCards(searchTerm);
});
