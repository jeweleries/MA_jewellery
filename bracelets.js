const bracelets = [
    {
        name: "Nail Bangle Bracelet",
        image: "Nail Bangle Bracelet.jpg",
        price: "100",
    },
    {
        name: "Van Cleef Black Bracelet",
        image: "Van Cleef Black Bracelet.jpg",
        price: "100",
    },
    {
        name: "Cartier Bracelet",
        image: "Cartier Bracelet.jpg",
        price: "100"
    },
    {
        name: "Van Cleef White Bracelet",
        image: "Van Cleef White Bracelet.jpg",
        price: "100"
    }
];

const braceletList = document.getElementById('braceletList');
bracelets.forEach(bracelet => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
        <img src="${bracelet.image}" alt="${bracelet.name}">
        <h3>${bracelet.name}</h3>
        <p>${bracelet.price} rs</p>
        <button onclick='addToCart(${JSON.stringify(bracelet)})'>Add to Cart</button>
    `;
    braceletList.appendChild(card);
});

function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(item.name + " added to cart!");
}
