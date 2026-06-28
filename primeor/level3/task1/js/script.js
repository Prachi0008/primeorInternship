// ================= IMAGES =================

const images = [
    {
        src: "images/img1.jpg",
        caption: "Beautiful Nature"
    },
    {
        src: "images/img2.jpg",
        caption: "Mountain Landscape"
    },
    {
        src: "images/img3.jpg",
        caption: "Sunset View"
    },
    {
        src: "images/img4.jpg",
        caption: "Green Forest"
    },
    {
        src: "images/img5.jpg",
        caption: "Blue Ocean"
    },
    {
        src: "images/img6.jpg",
        caption: "Snowy Mountains"
    }
];

// ================= LIGHTBOX =================

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const caption = document.getElementById("caption");
const close = document.querySelector(".close");

galleryImages.forEach((img) => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = img.src;

        caption.innerHTML = img.alt;

    });

});

close.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});

// ================= SLIDESHOW =================

const slideImage = document.getElementById("slideImage");

const prev = document.getElementById("prev");

const next = document.getElementById("next");

let current = 0;

function showSlide(index) {

    if (index < 0) {

        current = images.length - 1;

    }

    else if (index >= images.length) {

        current = 0;

    }

    else {

        current = index;

    }

    slideImage.style.opacity = 0;

    setTimeout(() => {

        slideImage.src = images[current].src;

        slideImage.alt = images[current].caption;

        slideImage.style.opacity = 1;

    }, 250);

}

next.addEventListener("click", () => {

    showSlide(current + 1);

});

prev.addEventListener("click", () => {

    showSlide(current - 1);

});

// ================= AUTO SLIDESHOW =================

setInterval(() => {

    showSlide(current + 1);

}, 6000);

// ================= KEYBOARD CONTROLS =================

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        lightbox.style.display = "none";

    }

    if (e.key === "ArrowRight") {

        showSlide(current + 1);

    }

    if (e.key === "ArrowLeft") {

        showSlide(current - 1);

    }

});

// ================= INITIAL SLIDE =================

showSlide(0);