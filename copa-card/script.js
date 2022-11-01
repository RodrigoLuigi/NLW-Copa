let card = document.querySelector(".card");
let isIgnite = true;

card.addEventListener('click', () => {
  const backgroundImage = isIgnite 
    ? "url(./assets/bg-ignite.svg)"
    : "url(./assets/bg-explorer.svg)"
    isIgnite = !isIgnite;
  card.style.backgroundImage = backgroundImage;
  console.log(backgroundImage)
})

