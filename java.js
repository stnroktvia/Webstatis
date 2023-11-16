let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const articleLink = this.getAttribute('href');
            window.location.href = articleLink;
        });
    });
});

function toggleSidebar() {
    var sidebar = document.querySelector('.sidenav');
    sidebar.style.width = (sidebar.style.width === '250px') ? '0' : '250px';
}

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }
