let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
});

const modal = document.getElementById("cert-modal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const span = document.getElementsByClassName("close")[0];

document.querySelectorAll('.certificate-box .btn').forEach(button => {
    button.onclick = function (e) {
        e.preventDefault();
        modal.style.display = "block";
        const imgSrc = this.parentElement.parentElement.querySelector('img').src;
        const title = this.parentElement.querySelector('h3').innerText;

        modalImg.src = imgSrc;
        captionText.innerHTML = title;
    }
});

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const projectBoxes = document.querySelectorAll('.project-box');

projectBoxes.forEach(box => {
    box.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            const layer = box.querySelector('.project-layer');
            layer.style.transform = layer.style.transform === 'translateY(0%)' ? 'translateY(100%)' : 'translateY(0%)';
        }
    });
});