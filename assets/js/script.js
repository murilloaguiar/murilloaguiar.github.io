const link_nav = document.querySelectorAll("#nav ul li a")

link_nav.forEach(element =>{

    element.addEventListener('click', () =>{

        link_nav.forEach(element_verification =>{
            if (element_verification.classList.contains('active')) {
                element_verification.classList.remove('active')
            }
        })
            
        element.classList.add("active");
    })
})