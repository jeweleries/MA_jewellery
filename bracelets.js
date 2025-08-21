const bracelets = [
    {
        name: "Nail Bangle Bracelet",
        image: "Nail Bangle Bracelet.jpg",
        price: "Rs 1399",
    },
    {
        name: "Cartier Bracelet",
        image: "Cartier Bracelet.jpg",
        price: "Rs 1499"
    },
    {
        name: "Black Flower Bracelet - Set Of 3",
        image: "Black Flower Bracelet - Set Of 3.jpg",
        price: "Rs 649"
    },
    {
        name: "Multi Color Diamond Bracelet",
        image: "Multi Color Diamond Bracelet.jpg",
        price: "Rs 499"
    },
    {
        name: "Rainbow Luxe Bracelet",
        image: "Rainbow Luxe Bracelet.jpg",
        price: "Rs 999"
    },
    {
        name: "Multi Gem Bracelet",
        image: "Multi Gem Bracelet.jpg",
        price: "Rs 1299"
    },
    {
        name: "Heart Bracelet",
        image: "Heart Bracelet.jpg",
        price: "Rs 1199"
    },
    {
        name: "Gold Steel Bracelet Combo",
        image: "Gold Steel Bracelet Combo.jpg",
        price: "Rs 1499"
    },
    {
        name: "Diamond Studded Gold Bracelet",
        image: "Diamond Studded Gold Bracelet.jpg",
        price: "Rs 699"
    },
    {
        name: "White Flower Bracelet",
        image: "Van Cleef Bracelet White.jpg",
        price: "Rs 1050"
    }
    
    
   
   
    
    
];

const braceletList = document.getElementById('braceletList');
bracelets.forEach(bracelet => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
        <img src="${bracelet.image}" alt="${bracelet.name}">
        <h3>${bracelet.name}</h3>
        <p>${bracelet.price}</p>
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
