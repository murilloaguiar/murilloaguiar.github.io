const animationClass = 'active'

const menuItems = document.querySelectorAll('#nav a[href^="#"]')
//console.log(menuItems)
 
menuItems.forEach(elements =>{
    elements.addEventListener('click', scrollToIdOnClick)
})

function getScrollTopByHref(element){
    let id = element.getAttribute('href')
    return document.querySelector(id)
    
}

function scrollToIdOnClick(event){
    event.preventDefault()
    let to = getScrollTopByHref(event.target).offsetTop
    scrollToPosition(to)
}

function scrollToPosition(to) {
    window.scroll({
        top: to-30,
        behavior: 'smooth'
    })
}


function activeClassMenu() {
    const windowTop = window.pageYOffset + ((window.innerHeight*3)/12)
    menuItems.forEach(elements =>{
        const sectionsTop = getScrollTopByHref(elements).offsetTop
        const sectionHeight = getScrollTopByHref(elements).offsetHeight
        if (windowTop > sectionsTop && (windowTop - sectionsTop <= sectionHeight)) {
            elements.classList.add(animationClass)
        }else{
            elements.classList.remove(animationClass)
        }
    })    
    
}

activeClassMenu()
window.addEventListener('scroll', ()=>{
    activeClassMenu()
})