const pageTitle = document.getElementById("page-title");

const changeTitleBtn = document.getElementById("change-title-btn")
const colorBtn = document.getElementById("color-btn")
const addCardBtn = document.getElementById("add-card-btn")
const clearCardsBtn = document.getElementById("clear-cards-btn")
const changeNameBtn = document.getElementById("change-name-btn")
const customTextInput = document.getElementById("name-text-input")
const cardsContainer = document.getElementById("cards-container")
const enterName = document.getElementById("enter-name")
const smallBtn = document.getElementById("small-text-btn")
const medBtn = document.getElementById("med-text-btn")
const bigBtn = document.getElementById("big-text-btn")
const changeText = document.getElementById("change-text")
const bodyText = document.getElementById("body-text")
const styleBtn = document.getElementById("style-text-btn")
const resetBtn = document.getElementById("reset-all-btn")




changeTitleBtn.addEventListener("click", () => {
    if (pageTitle.innerText === "Welcome to manipulating the Dom!") {
        pageTitle.innerText = "Hello, User!";
    } else {
        pageTitle.innerText = "Welcome to manipulating the Dom!";

    }
})

colorBtn.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.background = randomColor

})

changeNameBtn.addEventListener("click", () => {
    const value = customTextInput.value.trim();
    if (!value) return;
    enterName.innerText = "Hello, " + customTextInput.value + "!";
    customTextInput.value = ""
})

smallBtn.addEventListener("click", () => {
    changeText.style.fontSize = "10px"
    pageTitle.style.fontSize = "30px"
    enterName.style.fontSize = "10px"
})

medBtn.addEventListener("click", () => {
    changeText.style.fontSize = "20px"
    pageTitle.style.fontSize = "40px"
    enterName.style.fontSize = "20px"
})

bigBtn.addEventListener("click", () => {
    changeText.style.fontSize = "30px"
    pageTitle.style.fontSize = "50px"
    enterName.style.fontSize = "30px"
})

styleBtn.addEventListener("click", () => {
    if (bodyText.style.fontFamily != "fantasy") { 
        bodyText.style.fontFamily = "fantasy"; 
    }else {
        bodyText.style.fontFamily = "sans-serif";
    }
})
resetBtn.addEventListener("click", () => {
    changeText.style.fontSize = "20px"
    pageTitle.style.fontSize = "40px"
    enterName.style.fontSize = "20px"
    pageTitle.innerText = "Welcome to manipulating the Dom!"
    cardsContainer.innerHTML = ""
    bodyText.style.fontFamily = "sans-serif";
    enterName.innerText = "Enter your name below";
    customTextInput.value = ""
    document.body.style.background="white"
})



function createCard(text) {
    const card = document.createElement("div");
    card.className = 'card';
    const content = document.createElement("p");
    content.innerText = text;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete Card";

    deleteBtn.addEventListener("click", () => {
        card.remove();
    });

    card.appendChild(content);
    card.appendChild(deleteBtn);

    return card;

}



addCardBtn.addEventListener("click", () => {
    const card = createCard("Hi, i'm a card! Please don't delete me!");
    cardsContainer.appendChild(card);
})

clearCardsBtn.addEventListener("click", () => {
    cardsContainer.innerHTML = ""
})