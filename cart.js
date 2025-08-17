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

window.onload = loadCart;