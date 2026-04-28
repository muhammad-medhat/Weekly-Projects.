// alert("Click on the cards to see the effect!");
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("sp");
  });
});
