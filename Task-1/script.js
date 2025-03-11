const images = [
    'https://picsum.photos/800/400?random=1',
    'https://picsum.photos/800/400?random=2',
    'https://picsum.photos/800/400?random=3',
    'https://picsum.photos/800/400?random=4',
    'https://picsum.photos/800/400?random=5',
    'https://picsum.photos/800/400?random=6',
    'https://picsum.photos/800/400?random=7',
    'https://picsum.photos/800/400?random=8',
    'https://picsum.photos/800/400?random=9',
    'https://picsum.photos/800/400?random=10',
    'https://picsum.photos/800/400?random=11',
    'https://picsum.photos/800/400?random=12',
    'https://picsum.photos/800/400?random=13',
    'https://picsum.photos/800/400?random=14',
    'https://picsum.photos/800/400?random=15',
    'https://picsum.photos/800/400?random=16',
    'https://picsum.photos/800/400?random=17',
    'https://picsum.photos/800/400?random=18',
    'https://picsum.photos/800/400?random=19',
    'https://picsum.photos/800/400?random=20'
];

let currentIndex = 0;
const mainImage = document.getElementById('main-image');
const thumbnailsContainer = document.getElementById('thumbnails');

// Initialize gallery
function initGallery() {
    mainImage.src = images[currentIndex];
    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.className = 'thumbnail';
        thumbnail.src = image;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.dataset.index = index;
        thumbnail.addEventListener('click', () => showImage(index));
        if (index === currentIndex) {
            thumbnail.classList.add('active');
        }
        thumbnailsContainer.appendChild(thumbnail);
    });
}

function showImage(index) {
    currentIndex = index;
    mainImage.src = images[currentIndex];
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === currentIndex);
    });

    // Scroll thumbnail into view
    const activeThumb = thumbnailsContainer.children[currentIndex];
    activeThumb.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
    });
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Initialize the gallery
initGallery();

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        previousImage();
    } else if (e.key === 'ArrowRight') {
        nextImage();
    }
});