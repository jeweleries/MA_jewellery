// Simple cart loader using localStorage
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
    let total = 0;
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        document.getElementById('cartTotal').textContent = '';
        return;
    }
    cart.forEach((item, idx) => {
        total += Number(item.price);
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price} ${item.price.endsWith('rs') ? '' : 'rs'}</p>
            ${item.color ? `<p>Color: ${item.color}</p>` : ''}
            <button onclick="removeFromCart(${idx})" style="margin-top:0.5em;">Remove</button>
        `;
        cartItemsDiv.appendChild(card);
    });
    document.getElementById('cartTotal').textContent = `Total: ${total} rs`;
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}
function placeOrder() {
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const address = document.getElementById('customerAddress').value;
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    if (!name || !phone || !address || cart.length === 0) {
        alert("Please fill all details and add items to cart.");
        return;
    }

    let orderDetails = `*New Order Received*%0A%0AName: ${name}%0APhone: ${phone}%0AAddress: ${address}%0A%0AItems:%0A`;

    cart.forEach((item, i) => {
        orderDetails += `${i+1}. ${item.name} - ${item.price} rs${item.color ? " ("+item.color+")" : ""}%0A`;
    });

    let total = cart.reduce((sum, item) => sum + Number(item.price), 0);
    orderDetails += `%0ATotal: ${total} rs`;

    // 👉 Your WhatsApp Number
    window.open(`https://wa.me/923363766403?text=${orderDetails}`, "_blank");

    // ✅ Order ke baad cart clear
    localStorage.removeItem('cart');
    loadCart();
}

window.onload = loadCart;
