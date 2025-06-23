// Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');
changeTextBtn.addEventListener('click', () => {
    dynamicText.textContent = 'The text has been changed dynamically!';
});

// Modify CSS styles via JavaScript
const changeStyleBtn = document.getElementById('change-style-btn');
const styleText = document.getElementById('style-text');
changeStyleBtn.addEventListener('click', () => {
    styleText.style.color = styleText.style.color === 'crimson' ? 'black' : 'crimson';
});

// Add or remove an element when a button is clicked
const toggleElementBtn = document.getElementById('toggle-element-btn');
const elementContainer = document.getElementById('element-container');
let elementAdded = false;
toggleElementBtn.addEventListener('click', () => {
    if (!elementAdded) {
        const newDiv = document.createElement('div');
        newDiv.id = 'dynamic-element';
        newDiv.textContent = 'I was added dynamically!';
        newDiv.style.marginTop = '10px';
        newDiv.style.padding = '10px';
        newDiv.style.background = '#e0e0e0';
        elementContainer.appendChild(newDiv);
        elementAdded = true;
    } else {
        const existingDiv = document.getElementById('dynamic-element');
        if (existingDiv) {
            elementContainer.removeChild(existingDiv);
        }
        elementAdded = false;
    }
});
