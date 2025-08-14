const necklaces = [
    {
        name: "Double Butterfly Necklace",
        image: "Double Butterfly Necklace.jpg",
        price: "100",  
        colors: ["Golden"]
    },
    {
        name: "Heart Necklace",
        image: "Heart Necklace.jpg",
        price: "100", 
        colors: ["Golden"]
    },
    {
        name: "White Butterfly Necklace",
        image: "White Butterfly Necklace.jpg",
        price: "100", 
        colors: ["Golden"]
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
        price: "1199 rs",
        colors: ["Silver", "Golden"]
        
    },
    {
        name: "Butterfly with Beads Necklace",
        image: "Butterfly with Beads Necklace.jpg",
        price: "100",  
        colors: ["Silver", "Golden"]
    },
    {
        name: "Diamond Dog Necklace",
        image: "Diamond Dog Necklace.jpg",
        price: "100",  
        colors: ["Golden"]
    },
    {
        name: "Gold Foil Circle Chain",
        image: "Gold Foil Circle Chain.jpg",
        price: "100",  
        colors: ["Golden"]
    },
    {
        name: "Gold Foil Pearl Necklace",
        image: "Gold Foil Pearl Necklace.jpg",
        price: "100",  
        colors: ["Golden"]
    },
    {
        name: "Luna Necklace",
        image: "Luna Necklace.jpg",
        price: "100",  
        colors: ["Golden"]
    },
    {
        name: "Marbled Classy Gold Chain Necklace",
        image: "Marbled Classy Gold Chain Necklace.jpg",
        price: "100",  
        colors: ["Golden"]
    },
    {
        name: "Interlocking Roman Necklace",
        image: "Interlocking Roman Necklace.jpg",
        price: "100",  
        colors: ["Golden"]
    },
    {
        name: "Two Sided Heart Necklace",
        image: "Two Sided Heart Necklace.jpg",
        price: "100",  
        colors: ["Golden"]
    },
    {
        name: "Square Crystal Necklace",
        image: "Square Crystal Necklace.jpg",
        price: "100",  
        colors: ["Golden"]
    },
    {
        name: "Red Cherry Necklace",
        image: "Red Cherry Necklace.jpg",
        price: "100",  
        colors: ["Golden"]
    },
    {
        name: "Gold Diamond Moon Necklace",
        image: "Gold Diamond Moon Necklace.jpg",
        price: "100",  
        colors: ["Golden"]
    },

    
 
    
    
     
    
     
   
    
    
    
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

