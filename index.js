console.log("This is js file");

// Creating logic for menu
const sea_card = document.getElementById("sea_card");
const seafood = document.getElementById("seafood");
const pak_card = document.getElementById("pak_card");
const pakistani_food = document.getElementById("pakistani_food");
const con_card = document.getElementById("con_card");
const continental_food = document.getElementById("continental_food");
const order = document.getElementById("order");
// For sea food
sea_card.addEventListener("click", () => {
  pakistani_food.style.display = "none";
  continental_food.style.display = "none";
  //   console.log("Clicked");
  if (seafood.style.display == "none") {
    // console.log("Blocked");
    seafood.style.display = "block";
  } else {
    seafood.style.display = "none";
  }
});
//For Pakistani Dishes
pak_card.addEventListener("click", () => {
  seafood.style.display = "none";
  continental_food.style.display = "none";
  //   console.log("Clicked");
  if (pakistani_food.style.display == "none") {
    // console.log("Blocked");
    pakistani_food.style.display = "block";
  } else {
    pakistani_food.style.display = "none";
  }
});
//For Continental Dishes
con_card.addEventListener("click", () => {
  seafood.style.display = "none";
  pakistani_food.style.display = "none";
  //   console.log("Clicked");
  if (continental_food.style.display == "none") {
    // console.log("Blocked");
    continental_food.style.display = "block";
  } else {
    continental_food.style.display = "none";
  }
});
// To shut
order.addEventListener("mouseenter", () => {
  //   console.log("leaved");
  seafood.style.display = "none";
  pakistani_food.style.display = "none";
  continental_food.style.display = "none";
});
