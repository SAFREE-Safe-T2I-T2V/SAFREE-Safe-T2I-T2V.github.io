// script.js

// Dynamically create n buttons and images
const n = 16; // You can set this to any number of images you want
const imageContainer = document.getElementById('image-container');
const myList = [
    './static/images/overall-vis.png',
    './static/images/nudity-1.png',
    './static/images/nudity-2.png',
    './static/images/nudity-3.png',
    './static/images/nudity-xl-v3.png',
    './static/images/vangogh-1.png',
    './static/images/vangogh-2.png',
    './static/images/vangogh-3.png',
    './static/images/cogx-1.png',
    './static/images/cogx-2.png',
    './static/images/cogx-3.png',
    './static/images/cogx-4.png',    
    './static/images/zerosc-1.png',
    './static/images/zerosc-2.png',
    './static/images/zerosc-3.png',
    './static/images/zerosc-4.png'
];

const altList = [
    'Overall Results',
    'Removing Nudity (1)',
    'Removing Nudity (2)',
    'Removing Nudity (3)',
    'Removing Nudity with SDXL and SD-V3',
    'Removing Artist Concept - "Van Gogh" (1)',
    'Removing Artist Concept - "Van Gogh" (2)',
    'Preserving Other Artist Concepts while Removing "Van Gogh"',
    'Safe T2V Generation with CogVideoX (1)',
    'Safe T2V Generation with CogVideoX (2)',
    'Safe T2V Generation with CogVideoX (3)',
    'Safe T2V Generation with CogVideoX (4)',
    'Safe T2V Generation with ZeroScopeT2V (1)',
    'Safe T2V Generation with ZeroScopeT2V (2)',
    'Safe T2V Generation with ZeroScopeT2V (3)',
    'Safe T2V Generation with ZeroScopeT2V (4)',
];

// Function to generate buttons and images
for (let i = 1; i <= n; i++) {
    // Create a button
    const button = document.createElement('button');
    
    button.className = 'fancy-button-not-change';
    button.setAttribute('data-id', i); // Add an ID for reference

    // Create a figure with an image
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = myList[i-1];  // Replace with actual image paths
    img.alt = altList[i-1];
    figure.appendChild(img);
    
    button.textContent = `${altList[i-1]}`;
    if (i < 6 || i > 8) {
        // Initially set the image to be blurred
        button.className = 'fancy-button';
        img.style.filter = 'blur(10px)';
        button.textContent = `Unlock ${altList[i-1]}`;    
        // Append both the button and figure to the container
        
    }
    figure.style.marginBottom = '50px';  // 20px space between figures
    imageContainer.appendChild(button);            
    imageContainer.appendChild(figure);
    // // Insert a line break after each button and figure
    // const lineBreak = document.createElement('br');
    // imageContainer.appendChild(lineBreak);
    // imageContainer.appendChild(lineBreak);
    // imageContainer.appendChild(lineBreak);
    // imageContainer.appendChild(lineBreak);
}

// Function to toggle blur for an image
function toggleBlur(button, img) {
    if (img.style.filter === 'blur(10px)') {
        img.style.filter = 'blur(0)';
        button.textContent = `Lock ${button.textContent.split(' ').slice(1).join(' ')}`;  // Update button text
    } else {
        img.style.filter = 'blur(10px)';
        button.textContent = `Unlock ${button.textContent.split(' ').slice(1).join(' ')}`; // Update button text
    }
}

// Add event listeners to each button dynamically
const buttons = document.querySelectorAll('.fancy-button');
buttons.forEach(button => {
    const id = button.getAttribute('data-id');  // Get the corresponding image ID
    const img = document.querySelector(`figure:nth-of-type(${id}) img`);  // Select corresponding image

    // Add event listener for each button
    button.addEventListener('click', () => toggleBlur(button, img));
});
