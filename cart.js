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
    <div class="cart-total-box">
        <strong>Subtotal:</strong> Rs ${subtotal} <br>
        <strong>Delivery Charges:</strong> Rs ${deliveryCharges} <br>
        <hr>
        <span class="final-total">Total: Rs ${finalTotal}</span>
    </div>
`;
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function placeOrder() {
    const name = (document.getElementById('customerName').value || '').trim();
    const phone = (document.getElementById('customerPhone').value || '').trim();
    const address = (document.getElementById('customerAddress').value || '').trim();
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const deliveryCharges = 200;

    if (!name || !phone || !address || cart.length === 0) {
        alert("Please fill all details and add items to cart.");
        return;
    }

    let subtotal = 0;
    let itemsText = '';

    cart.forEach((item, i) => {
        const priceNum = parseInt(item.price.toString().replace(/\D/g, "")) || 0;
        subtotal += priceNum;
        itemsText += `${i+1}. ${item.name} - Rs ${priceNum}${item.color ? " ("+item.color+")" : ""}\n`;
    });

    const finalTotal = subtotal + deliveryCharges;

    // Build email content
    const recipientEmail = 'manoorani98@gmail.com'; // <-- REPLACE with your email address
    const subject = `New order from ${name} - Total Rs ${finalTotal}`;
    const body = [
        '✨ NEW ORDER RECEIVED ✨',
        '',
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Address: ${address}`,
        '',
        'Items:',
        itemsText,
        '',
        `Subtotal: Rs ${subtotal}`,
        `Delivery Charges: Rs ${deliveryCharges}`,
        `Total: Rs ${finalTotal}`,
        '',
    ].join('\n');

    // Open user's default mail client with prefilled subject & body
    const mailto = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    // Clear cart after initiating email
    localStorage.removeItem('cart');
    loadCart();
}

window.onload = loadCart;
