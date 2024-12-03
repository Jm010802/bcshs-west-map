document.getElementById('floorButton').addEventListener('click', function() {
    const image = document.getElementById('floorImage');
    const button = document.getElementById('floorButton');
    const heading = document.querySelector('h1'); // Select the <h1> element

    if (button.textContent === 'SECOND FLOOR') {
        image.src = 'src/2nd-floor.jpg'; // Change image source
        button.textContent = 'GROUND FLOOR'; // Change button text
        heading.textContent = 'SECOND FLOOR'; // Change heading text
    } else {
        image.src = 'src/1st-floor.jpg'; // Change back to first floor image
        button.textContent = 'SECOND FLOOR'; // Change button text back
        heading.textContent = 'Ground Floor'; // Change heading text back
    }
});