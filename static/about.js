const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const nav = document.querySelector('.nav')
const carousel = document.querySelector('.carousel')
const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const body = document.querySelector('body')
const img = document.querySelectorAll('#imgs img')

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
    carousel.style.display = 'none'
    if (load === 100) {
        carousel.style.display = 'block'
        body.style.overflowY = 'scroll'
        
    }

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



let idx = 0

let int = setInterval(run, 2000)

function run() {
    idx++

    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = img.length - 1 
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval(int)
    int = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++

    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})