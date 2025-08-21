const anklets = [
    {
        name: "Silver Charm Anklet",
        image: "Silver Charm Anklet.jpg",
        price: "Rs 899",
    },
    {
        name: "Gold Beaded Anklet",
        image: "Gold Beaded Anklet.jpg",
        price: "Rs 999"
    },
];

const ankletList = document.getElementById('ankletList');
anklets.forEach(anklet => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
        <img src="${anklet.image}" alt="${anklet.name}">
        <h3>${anklet.name}</h3>
        <p>${anklet.price}</p>
        <button onclick='addToCart(${JSON.stringify(anklet)})'>Add to Cart</button>
    `;
    ankletList.appendChild(card);
});

function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(item.name + " added to cart!");
}
