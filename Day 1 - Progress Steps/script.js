const progresses = document.getElementById('progress');
const previews = document.getElementById('preview');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle')

let currentActive = 1;

next.addEventListener('click', function () {
    currentActive++



    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
});


previews.addEventListener('click', function () {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()
});

function update() {
    circles.forEach(function (circle, index) {
        if (index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    });

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if (currentActive === 1) {
        previews.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        previews.disabled = false
        next.disabled = false
    }
}