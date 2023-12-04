let navElements = document.querySelectorAll('.nav-shape');
navElements.forEach(element => {
    element.addEventListener('click', () => {
        navElements.forEach(item => item.classList.remove('active'));
        element.classList.add('active');
    });
});
let nums = document.querySelectorAll(".num");
let section = document.querySelector(".counter");
let started = false;
window.onscroll = function () {
    if (window.scrollY <= section.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
}
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 10 / goal);
}

let progressSection = document.querySelector('#prog');
let progressBar = document.querySelectorAll('.progress-bar');
function showProgress() {
    progressBar.forEach(progressBar => {
        let value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`
    })
}
function hideProgress() {
    progressBar.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    })
}
window.addEventListener('scroll', () => {
    let sectionPos = progressSection.getBoundingClientRect().top;
    let screenPos = window.innerHeight;
    if (sectionPos < screenPos) {
        showProgress()
    } else {
        hideProgress()
    }
})
