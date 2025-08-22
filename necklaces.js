const necklaces = [
    {
        name: "Double Butterfly Necklace",
        image: "Double Butterfly Necklace.jpg",
        price: "Rs 1199",  
        colors: ["Golden"]
    },
    {
        name: "Heart Necklace",
        image: "Heart Necklace.jpg",
        price: "Rs 999", 
        colors: ["Golden"]
    },
    {
        name: "White Butterfly Necklace",
        image: "White Butterfly Necklace.jpg",
        price: "Rs 1399", 
        colors: ["Golden"]
    },
    {
        name: "Van Cleef Chain",
        image: "Van Cleef Chain.jpg",
        price: "Rs 1599",  
        colors: ["Silver", "Golden"]
    },
    {
        name: "Bow Necklace",
        image: "Bow Necklace.jpg",
        price: "Rs 1199",
        colors: ["Silver", "Golden"]
        
    },
    {
        name: "Butterfly with Beads Necklace",
        image: "Butterfly with Beads Necklace.jpg",
        price: "Rs 1499",  
        colors: ["Silver", "Golden"]
    },
    {
        name: "Diamond Dog Necklace",
        image: "Diamond Dog Necklace.jpg",
        price: "Rs 849",  
        colors: ["Golden"]
    },
    {
        name: "Gold Foil Circle Chain",
        image: "Gold Foil Circle Chain.jpg",
        price: "Rs 1029",  
        colors: ["Golden"]
    },
    {
        name: "Gold Foil Pearl Necklace",
        image: "Gold Foil Pearl Necklace.jpg",
        price: "Rs 779",  
        colors: ["Golden"]
    },
    {
        name: "Luna Necklace",
        image: "Luna Necklace.jpg",
        price: "Rs 799",  
        colors: ["Golden"]
    },
    {
        name: "Marbled Classy Gold Chain Necklace",
        image: "Marbled Classy Gold Chain Necklace.jpg",
        price: "Rs 529",  
        colors: ["Golden"]
    },
    {
        name: "Interlocking Roman Necklace",
        image: "Interlocking Roman Necklace.jpg",
        price: "Rs 799",  
        colors: ["Golden"]
    },
    {
        name: "Two Sided Heart Necklace",
        image: "Two Sided Heart Necklace.jpg",
        price: "Rs 899",  
        colors: ["Golden"]
    },
    {
        name: "Square Crystal Necklace",
        image: "Square Crystal Necklace.jpg",
        price: "Rs 899",  
        colors: ["Golden"]
    },
    {
        name: "Red Cherry Necklace",
        image: "Red Cherry Necklace.jpg",
        price: "Rs 829",  
        colors: ["Golden"]
    },
    {
        name: "Gold Diamond Moon Necklace",
        image: "Gold Diamond Moon Necklace.jpg",
        price: "Rs 699",  
        colors: ["Golden"]
    },
    {
        name: "BowTie Necklace",
        image: "BowTie Necklace.jpg",
        price: "Rs 1150",  
        colors: ["Golden"]
    },
    {
        name: "Dew Drop Diamond Necklace",
        image: "Dew Drop Diamond Necklace.jpg",
        price: "Rs 1550",  
        colors: ["Golden"]
    },
    {
        name: "Diamond Butterfly Necklace",
        image: "Diamond Butterfly Necklace.jpg",
        price: "Rs 1199",  
        colors: ["Golden"]
    },
    {
        name: "Double Diamond Necklace",
        image: "Double Diamond Necklace.jpg",
        price: "Rs 1599",  
        colors: ["Golden"]
    },
    {
        name: "Emerald Necklace",
        image: "Emerald Necklace.jpg",
        price: "Rs 1299",  
        colors: ["Golden"]
    },
    {
        name: "Pink Stone Necklace",
        image: "Pink Stone Necklace.jpg",
        price: "Rs 1249",  
        colors: ["Golden"]
    },
    {
        name: "Black&Gold Square Choker",
        image: "Black&Gold Square Choker.jpg",
        price: "Rs 659",  
        colors: ["Golden"]
    },
    {
        name: "Silver Stone Necklace",
        image: "Silver Stone Necklace.jpg",
        price: "Rs 699",  
        colors: ["Silver"]
    },
    {
        name: "Vintage Rose Necklace",
        image: "Vintage Rose Necklace.jpg",
        price: "Rs 1559",  
        colors: ["Black","White"]
    },
    {
        name: "Flower Necklace",
        image: "Flower Necklace.jpg",
        price: "Rs 999",  
        colors: ["Golden"]
    },
    {
        name: "Diamond Heart Necklace",
        image: "Diamond Heart Necklace.jpg",
        price: "Rs 999",  
        colors: ["Golden"]
    },
    {
        name: "Butterfly Stack Necklace",
        image: "Butterfly Stack Necklace.jpg",
        price: "Rs 1249",  
        colors: ["Golden"]
    },
    {
        name: "Bow With Beads Necklace",
        image: "Bow With Beads Necklace.jpg",
        price: "Rs 859",  
        colors: ["Golden"]
    }
   
];
const necklaceList = document.getElementById('necklaceList');
necklaces.forEach((necklace, idx) => {
    const card = document.createElement('div');
    card.className = 'item-card';
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
        <button onclick="addNecklaceToCart(${idx})">Add to Cart</button>
    `;
    necklaceList.appendChild(card);
});

function addNecklaceToCart(idx) {
    const colorInputs = document.getElementsByName(`necklace-color-${idx}`);
    let selectedColor = "";
    colorInputs.forEach(input => {
        if (input.checked) selectedColor = input.value;
    });
    const necklace = { ...necklaces[idx], color: selectedColor };
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(necklace);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(necklace.name + " (" + selectedColor + ") added to cart!");
}

