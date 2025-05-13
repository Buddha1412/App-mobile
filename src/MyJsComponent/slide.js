export function initSlider() {
    let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');

    let active = 1; // Start with the first card

    function loadShow() {
        // Reset all items
        items.forEach((item) => {
            item.style.transform = 'none';
            item.style.zIndex = 0;
            item.style.filter = 'blur(5px)';
            item.style.opacity = 0;
        });

        // Ensure active item is styled correctly
        items[active].style.transform = 'none';
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;

        // Style the next card (if it exists)
        if (active + 1 < items.length) {
            items[active + 1].style.transform = `translateX(120px) scale(0.8) perspective(16px) rotateY(-1deg)`;
            items[active + 1].style.zIndex = 0;
            items[active + 1].style.filter = 'blur(5px)';
            items[active + 1].style.opacity = 0.6;
        }

        // Style the previous card (if it exists)
        if (active - 1 >= 0) {
            items[active - 1].style.transform = `translateX(-120px) scale(0.8) perspective(16px) rotateY(1deg)`;
            items[active - 1].style.zIndex = 0;
            items[active - 1].style.filter = 'blur(5px)';
            items[active - 1].style.opacity = 0.6;
        }
    }

    // Initialize the slider
    loadShow();

    // Handle the "Next" button click
    next.onclick = function () {
        active = (active + 1) % items.length; // Loop back to the first card
        loadShow();
    };

    // Handle the "Previous" button click
    prev.onclick = function () {
        active = (active - 1 + items.length) % items.length; // Loop back to the last card
        loadShow();
    };
}