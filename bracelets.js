const bracelets = [
    {
        name: "Elegant Gold Bracelet",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
        description: "A timeless gold design for every occasion."
    },
    {
        name: "Beaded Charm Bracelet",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        description: "Colorful beads and charms for a playful look."
    },
    {
        name: "Silver Chain Bracelet",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        description: "Classic silver chain, perfect for layering."
    }
];

const braceletList = document.getElementById('braceletList');
bracelets.forEach(bracelet => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
        <img src="${bracelet.image}" alt="${bracelet.name}">
        <h3>${bracelet.name}</h3>
        <p>${bracelet.description}</p>
    `;
    braceletList.appendChild(card);
});