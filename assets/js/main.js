const productsCountEl = document.getElementById("products-count");
// console.log(productsCountEl);

const addToCartBtns = document.querySelectorAll(".add-cart");
// console.log(addToCartBtns);

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
        // ++productsCountEl.textContent;
    });
}

const likeProductsBtn = document.querySelectorAll(".like");
likeProductsBtn.forEach((item) => {
    item.addEventListener("click", function () {
        item.classList.toggle("clicked");
    });
});

const detailsButton = document.querySelectorAll(".details");
const modalForm = document.querySelector(".modal");
const btnClose = document.querySelector(".btn-close");

function openModal() {
    modalForm.classList.add("show");
    modalForm.classList.remove("hide");
}
function closeModal() {
    modalForm.classList.add("hide");
    modalForm.classList.remove("show");
}

detailsButton.forEach((item) => {
    item.addEventListener("click", function () {
        modalForm.classList.add("show");
    });
});

btnClose.addEventListener("click", closeModal);

let isNotTriggered = true;
window.onscroll = function () {

    const scrolling = window.scrollY;
    console.log(scrolling);
    if (scrolling > 1200 && isNotTriggered == true) {
        modalForm.classList.add("show");
        isNotTriggered = false;
    } else {
        modalForm.classList.add("hide");
    }
}


$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplatSpeed: 3000,
    });
});

let decrementBtns = document.querySelectorAll(".decrement-btns");
let incrementBtns = document.querySelectorAll(".increment-btns");
let quantityInput = document.querySelectorAll(".product-quantity input");

// let minCount = 1;
// let maxCount = 5;

function Counter(incrementBtn, decrementBtn, inputField, minCount = 1, maxCount = 5) {
    this.domRefs = {
        incrementBtn,
        decrementBtn,
        inputField,
    };

    this.toggleButtonState = function () {
        let count = this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled = count <= minCount;
        this.domRefs.incrementBtn.disabled = count >= maxCount;
    };

    this.toggleButtonState();

    this.increment = function () {
        this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
        this.toggleButtonState();
    };
    this.decrement = function () {
        this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
        this.toggleButtonState();
    };

    this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));

    this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
}

let counterAll;
for(i = 0; i < quantityInput.length; i++) {
    counterAll = new Counter(incrementBtns[i],decrementBtns[i],quantityInput[i]);
}

