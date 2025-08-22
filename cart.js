function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
    let subtotal = 0;
    const deliveryCharges = 200; // 👈 yahan ap apni delivery charges fix kr skte ho

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        document.getElementById('cartTotal').textContent = '';
        return;
    }

    cart.forEach((item, idx) => {
        // Safe parse: sirf digits nikal lo
        const priceNum = parseInt(item.price.toString().replace(/\D/g, "")) || 0;

        subtotal += priceNum;

        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Rs ${priceNum}</p>
            ${item.color ? `<p>Color: ${item.color}</p>` : ''}
            <button onclick="removeFromCart(${idx})" style="margin-top:0.5em;">Remove</button>
        `;
        cartItemsDiv.appendChild(card);
    });

    const finalTotal = subtotal + deliveryCharges;

    document.getElementById('cartTotal').innerHTML = `
        Subtotal: Rs ${subtotal} <br>
        Delivery Charges: Rs ${deliveryCharges} <br>
        <strong>Total: Rs ${finalTotal}</strong>
    `;
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
    const deliveryCharges = 200;

    if (!name || !phone || !address || cart.length === 0) {
        alert("Please fill all details and add items to cart.");
        return;
    }

    let orderDetails = `✨ *📦 NEW ORDER RECEIVED 📦* ✨%0A%0A` +
                       `👤 *Name:* ${name}%0A` +
                       `📞 *Phone:* ${phone}%0A` +
                       `🏠 *Address:* ${address}%0A%0A` +
                       `🛍️ *Items:*%0A`;

    let subtotal = 0;

    cart.forEach((item, i) => {
        const priceNum = parseInt(item.price.toString().replace(/\D/g, "")) || 0;
        subtotal += priceNum;
        orderDetails += `${i+1}. ${item.name} - Rs ${priceNum}${item.color ? " ("+item.color+")" : ""}%0A`;
    });

    const finalTotal = subtotal + deliveryCharges;

    orderDetails += `%0A💰 *Subtotal:* Rs ${subtotal}%0A`;
    orderDetails += `🚚 *Delivery Charges:* Rs ${deliveryCharges}%0A`;
    orderDetails += `⭐ *Total:* Rs ${finalTotal} ⭐`;

    // 👉 Your WhatsApp Number
    window.open(`https://wa.me/923363766403?text=${orderDetails}`, "_blank");

    // ✅ Order ke baad cart clear
    localStorage.removeItem('cart');
    loadCart();
}

window.onload = loadCart;
