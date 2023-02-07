const menu = document.querySelector("#mobile")
const menuLinks = document.querySelector('.navbar_menu')

// to display mobile menu
const mobileMenu = () =>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')   
}

menu.addEventListener('click', mobileMenu);