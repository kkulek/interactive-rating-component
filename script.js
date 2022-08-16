const mainContainer = document.querySelector(".rating");
const thanksContainer = document.querySelector(".result");
const submitButton = document.querySelector(".rating__button");
const rateAgain = document.querySelector(".result__back");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".rating__number");

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    thanksContainer.classList.add("hidden")
    mainContainer.style.display = "flex"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})