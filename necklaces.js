const necklaces = [
    {
        name: "Double Butterfly Necklace",
        image: "Double Butterfly Necklace.jpg",
        price: "100",
        colors: ["Silver", "Golden"]
    },
    {
        name: "Heart Necklace",
        image: "Heart Necklace.jpg",
        price: "100",
        colors: ["Silver", "Golden"]
    },
    {
        name: "White Butterfly Necklace",
        image: "White Butterfly Necklace.jpg",
        price: "100",
        colors: ["Silver", "Golden"]
    },
    {
        name: "Van Cleef Chain",
        image: "Van Cleef Chain.jpg",
        price: "100",
        colors: ["Silver", "Golden"]
    },
    {
        name: "Bow Necklace",
        image: "Bow Necklace.jpg",
        price: "100",
        colors: ["Silver", "Golden"]
    },
    {
        name: "Butterfly with Beads Necklace",
        image: "Butterfly with Beads Necklace.jpg",
        price: "100",
        colors: ["Silver", "Golden"]
    }
    
    
    
    
];

const necklaceList = document.getElementById('necklaceList');
necklaces.forEach((necklace, idx) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    // Color selection
    let colorOptions = `<div class="color-select"><label>Choose color:</label>`;
    necklace.colors.forEach((color, i) => {
        colorOptions += `
            <label>
                <input type="radio" name="necklace-color-${idx}" value="${color}" ${i === 0 ? "checked" : ""}>
                ${color}
            </label>
        `;
    });
    colorOptions += `</div>`;

    card.innerHTML = `
        <img src="${necklace.image}" alt="${necklace.name}">
        <h3>${necklace.name}</h3>
        <p>${necklace.price}</p>
        ${colorOptions}
    `;
    necklaceList.appendChild(card);
});
