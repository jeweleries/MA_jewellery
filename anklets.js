const anklets = [
    {
        name: "Beads Anklet",
        image: "Beads Anklet.jpg",
        price: "Rs 999",
    },
    {
        name: "Bow Anklet",
        image: "Bow Anklet.jpg",
        price: "Rs 1099"
    },
    {
        name: "Dragonfly Anklet",
        image: "Dragonfly Anklet.jpg",
        price: "Rs 1099"
    },
    {
        name: "Butterfly Anklet",
        image: "Butterfly Anklet.jpg",
        price: "Rs 1099"
    },
    {
        name: "Single Diamond Anklet",
        image: "Single Diamond Anklet.jpg",
        price: "Rs 949"
    },
    {
        name: "Multi Heart Anklet",
        image: "Multi Heart Anklet.jpg",
        price: "Rs 499"
    },
    {
        name: "Simple Gold Anklet",
        image: "Simple Gold Anklet.jpg",
        price: "Rs 499"
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





