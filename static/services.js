const nav = document.querySelector('.nav')

currentLink()
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


