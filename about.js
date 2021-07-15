const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const nav = document.querySelector('.nav')

let load = 0
let interval = setInterval(blurring, 30)

currentLink()

function blurring() {
    load++

    if (load > 99) {
        clearInterval(interval)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

function currentLink() {
    const navLinks = document.querySelectorAll('a')

    navLinks.forEach(link => {
        if (link.classList.contains('current')) {
            link.classList.remove('current')
        } else {
            const pageTitle = document.querySelector('title')
            if (pageTitle.innerText === link.innerText) {
                link.classList.add('current')
            }

        }

    })
}

window.addEventListener('scroll', fixedNav)


function fixedNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}