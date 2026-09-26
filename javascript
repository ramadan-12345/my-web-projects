 <script>

const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function slide() {

    currentSlide++;

    if (currentSlide >= 4) {
        currentSlide = 0;
    }

    slides.style.transform =
        `translateX(-${currentSlide * 71}%)`;

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[currentSlide].classList.add("active");
}

setInterval(slide, 4000);

</script>