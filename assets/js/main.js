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


let decrementBtn = document.querySelectorAll('.decrement-btns')[0];
let incrementBtn = document.querySelectorAll('.increment-btns')[0];
let quantityInput = document.querySelectorAll('.product-quantity__inp')[0];

incrementBtn.addEventListener('click', function () {
    let currentValue = +quantityInput.value;
    let nextValue = currentValue + 1;
    quantityInput.value = nextValue;
    console.log(currentValue)
    if (currentValue > 8) {
        incrementBtn.disabled = true;
        decrementBtn.disabled = false;
    }
    else {
        incrementBtn.disabled = false;
        decrementBtn.disabled = false;
    }

});



decrementBtn.addEventListener('click', function () {
    let currentValue = +quantityInput.value;
    let nextValue = currentValue - 1;
    quantityInput.value = nextValue;
    console.log(currentValue)
    if (quantityInput.value > 0) {
        decrementBtn.disabled = false;
        incrementBtn.disabled = false;
    }
    else {
        decrementBtn.disabled = true;
        incrementBtn.disabled = false;
    }
});





