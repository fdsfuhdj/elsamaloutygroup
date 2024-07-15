let cart = [];

function addToCart(product) {
    cart.push(product);
    alert(product + " has been added to your cart.");
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItems.appendChild(li);
    });
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        alert("Thank you for your purchase!");
        cart = [];
        updateCart();
    }
}

function signUp() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert("Sign Up Successful");
}

function logIn() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert("Log In Successful");
    } else {
        alert("Incorrect Username or Password");
    }
}