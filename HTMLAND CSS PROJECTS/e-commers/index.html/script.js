let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cartCount").textContent = cartCount;

    alert("Product added to cart!");
}