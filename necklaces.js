const necklaces = [
    {
        name: "Double Butterfly Necklace",
        image: "Double Butterfly Necklace.jpg",
        price: "100"
    },
    {
        name: "Heart Necklace",
        image: "Heart Necklace.jpg",
        price: "100"
    },
    {
        name: "White Butterfly Necklace",
        image: "White Butterfly Necklace.jpg",
        price: "100"
    },
    {
        name: "Van Cleef Chain",
        image: "Van Cleef Chain.jpg",
        price: "100"
    },
];

const necklaceList = document.getElementById('necklaceList');
necklaces.forEach(necklace => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
        <img src="${necklace.image}" alt="${necklace.name}">
        <h3>${necklace.name}</h3>
        <p>${necklace.price}</p>
    `;
    necklaceList.appendChild(card);
});
