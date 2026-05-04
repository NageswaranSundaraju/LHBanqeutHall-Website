let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides and reset the dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";  
        dots[i].classList.remove("active");
    }

    slideIndex++;

    // If we exceed the number of slides, reset to 1
    if (slideIndex > slides.length) { slideIndex = 1 }

    // Show the current slide and highlight the corresponding dot
    slides[slideIndex - 1].style.opacity = "1";
    dots[slideIndex - 1].classList.add("active");

    // Change image every 5 seconds
    setTimeout(showSlides, 5000); 
}

// Manual slide controls for next/prev
function plusSlides(n) {
    slideIndex += n;

    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }

    // Display the updated slide
    showSlides();
}

// Initial call to display the slides
document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});

function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}