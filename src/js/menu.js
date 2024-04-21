const menuOpen = () => {

    const menuButton = document.querySelector('.hamburger-menu')
    const closeButton = document.querySelector('.close-menu')
    const menu = document.querySelector('.responsive-menu')

    const toggleMenu = () => {
        menu.classList.toggle('responsive-menu--open')
    }

    menuButton.addEventListener('click', toggleMenu)
    closeButton.addEventListener('click', toggleMenu)

}

menuOpen()