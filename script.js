const images = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg',
    'images/photo4.jpg'
];

const track = document.getElementById('galleryTrack');
const dotsContainer = document.getElementById('dotsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function initGallery() {
    if (images.length === 0) {
        console.log("No images found in the array!");
        return;
    }

    track.innerHTML = images.map(src => `<img src="${src}" class="slide-img" alt="Gallery Image">`).join('');

    dotsContainer.innerHTML = images.map((_, index) => `<div class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`).join('');

    updateGallery();
}

function updateGallery() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    document.querySelectorAll('.dot').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    updateGallery();
});

dotsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('dot')) {
        currentIndex = parseInt(e.target.getAttribute('data-index'));
        updateGallery();
    }
});

initGallery();
