document.addEventListener('DOMContentLoaded', () => {
    const imageStack = document.querySelector('.image-stack');
    const shuffleImages = Array.from(document.querySelectorAll('.shuffle-image'));
    const photoSources = [
        'mum-two.jpg.jpg',
        'mum-three.jpg',
        'mum-four.jpg',
        'mom-five.jpg.jpg'
    ];
    let shuffleIndex = 0;

    if (imageStack && shuffleImages.length === 3) {
        setInterval(() => {
            imageStack.classList.add('shuffling');

            setTimeout(() => {
                shuffleIndex = (shuffleIndex + 1) % photoSources.length;
                shuffleImages.forEach((image, index) => {
                    const photoIndex = (shuffleIndex + index) % photoSources.length;
                    image.src = photoSources[photoIndex];
                });
                imageStack.classList.remove('shuffling');
            }, 250);
        }, 3000);
    }

    const overlay = document.getElementById('intro-overlay');
    const splashBox = document.getElementById('splash-box');
    const mainContent = document.getElementById('main-content');

    // Listen for the first tap anywhere
    overlay.addEventListener('click', () => {
        // Step 1: Fade out the black intro overlay
        overlay.style.opacity = '0';

        setTimeout(() => {
            overlay.style.display = 'none';
            
            // Step 2: Show the splash box ("Happy Birthday")
            splashBox.classList.remove('hidden');
            splashBox.style.opacity = '1';

            // Keep the splash brief so the page feels immediate.
            setTimeout(() => {
                splashBox.style.opacity = '0'; // Fade out splash

                setTimeout(() => {
                    splashBox.style.display = 'none';
                    
                    // Step 4: Finally, show the main website content!
                    mainContent.classList.remove('hidden');
                    mainContent.style.opacity = '1';
                }, 600); // Wait for splash fade-out to finish

            }, 2500); 

        }, 1000); // Wait for intro fade-out to finish
    });
});