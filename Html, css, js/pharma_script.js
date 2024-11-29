// Slideshow functionality
/**let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change every 3 seconds
}
showSlides();

// Add to Cart functionality
let cartCount = 0;
const cartCountElement = document.getElementById("cart-count");

document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
        alert("Item added to cart!");
    });
});
const cart = [];
const taxRate = 0.1; // 10% tax

// Add to cart functionality
document.querySelectorAll(".add-to-cart").forEach((button, index) => {
    button.addEventListener("click", () => {
        const product = button.parentElement;
        const productName = product.querySelector("h3").innerText;
        const productPrice = parseFloat(product.querySelector("p").innerText.replace("$", ""));
        const cartItem = { name: productName, price: productPrice };
        cart.push(cartItem);
        updateCartCount();
    });
});

// Update cart count
function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

// Open cart modal
const cartModal = document.getElementById("cart-modal");
document.querySelector(".cart img").addEventListener("click", () => {
    displayCartItems();
    cartModal.style.display = "flex";
});

// Close cart modal
document.querySelector(".close-btn").addEventListener("click", () => {
    cartModal.style.display = "none";
});

// Display cart items
function displayCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = ""; // Clear previous items
    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemRow = document.createElement("div");
        itemRow.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(itemRow);
        subtotal += item.price;
    });

    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    document.getElementById("subtotal").innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById("tax").innerText = `$${tax.toFixed(2)}`;
    document.getElementById("total").innerText = `$${total.toFixed(2)}`;
} **/
// Handle slideshow
let slideIndex = 0;
function showSlides() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => (slide.style.display = "none"));
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change slide every 4 seconds
}
showSlides();

// Cart functionality
const cart = [];
const cartModal = document.getElementById("cart-modal");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const subtotalElem = document.getElementById("subtotal");
const taxElem = document.getElementById("tax");
const totalElem = document.getElementById("total");

// Open cart modal
document.querySelector(".cart img").addEventListener("click", () => {
    updateCart();
    cartModal.style.display = "block";
});

// Close modal
document.querySelector(".close-btn").addEventListener("click", () => {
    cartModal.style.display = "none";
});

// Add to cart functionality
document.querySelectorAll(".add-to-cart").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".pharmacy__card");
        const name = card.querySelector("h4").textContent;
        const price = parseFloat(card.querySelector(".price").textContent.replace("$", ""));
        addToCart({ name, price });
    });
});

function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        item.quantity = 1;
        cart.push(item);
    }
    updateCartCount();
}

function updateCartCount() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

function updateCart() {
    cartItems.innerHTML = "";
    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        const cartRow = document.createElement("div");
        cartRow.classList.add("cart-row");
        cartRow.innerHTML = `
            <p>${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</p>
        `;
        cartItems.appendChild(cartRow);
    });

    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    subtotalElem.textContent = `$${subtotal.toFixed(2)}`;
    taxElem.textContent = `$${tax.toFixed(2)}`;
    totalElem.textContent = `$${total.toFixed(2)}`;
}

// Close modal on outside click
window.addEventListener("click", event => {
    if (event.target === cartModal) {
        cartModal.style.display = "none";
    }
});
// Redirect to payment page
document.getElementById("paynow-btn").addEventListener("click", () => {
    window.location.href = "payment_cart.html"; // Replace "payment.html" with the actual payment page URL
});
       


