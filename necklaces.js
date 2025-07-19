const necklaces = [
    {
        name: "Pearl Necklace",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
        description: "Classic pearls for elegance and style."
    },
    {
        name: "Pendant Necklace",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        description: "A unique pendant for a personal touch."
    },
    {
        name: "Layered Necklace",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        description: "Trendy layered chains for modern looks."
    }
];

const necklaceList = document.getElementById('necklaceList');
necklaces.forEach(necklace => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
        <img src="${necklace.image}" alt="${necklace.name}">
        <h3>${necklace.name}</h3>
        <p>${necklace.description}</p>
    `;
    necklaceList.appendChild(card);
});