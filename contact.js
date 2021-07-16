const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const nav = document.querySelector('.nav')
const Bg = document.querySelector('.bg')

let load = 0
let interval = setInterval(blurring, 30)


bg.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11806.4050521127!2d22.687437271336233!3d42.28703427829703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aa9c6693c5328f%3A0xcc5e3380f6952464!2sKyustendil%2C%20Bulgaria!5e0!3m2!1sen!2suk!4v1626460746479!5m2!1sen!2suk" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'

currentLink()

function blurring() {
    load++

    if (load > 99) {
        clearInterval(interval)
        
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    bg.style.opacity = 0.5
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