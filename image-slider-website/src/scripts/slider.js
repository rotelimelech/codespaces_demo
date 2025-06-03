// This file contains the JavaScript code that implements the functionality of the image slider. 
// It handles the slider input, updates the displayed image based on the selected defocus value, 
// and manages any necessary event listeners.

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('defocus-slider');
    const imageDisplay = document.getElementById('image-display');

    slider.addEventListener('input', function() {
        const defocusValue = slider.value;
        updateImage(defocusValue);
    });

    function updateImage(defocusValue) {
        const imagePath = `./light_off_defocused_${defocusValue}.png`;
        imageDisplay.src = imagePath;
    }

    // Initialize the slider with the default value
    updateImage(slider.value);
});