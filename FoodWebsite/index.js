// header Sticky 
const navigation = document.querySelector('.navigation')


window.addEventListener('scroll', (e)=>{
    const header = document.querySelector('header')
    header.classList.toggle('sticky' , window.scrollY > 0)

})


function toggleMenu(){

    navigation.classList.toggle('active')
    document.querySelector('.menuToggle').classList.toggle('active')

}

// navbar responsive  
document.querySelector('.menuToggle').addEventListener('click' , (e) =>{
        toggleMenu()
})


const navbarLinks = document.querySelectorAll('ul li a');


navbarLinks.forEach((link,idx)=>{
    link.addEventListener('click' , (e)=>{
        toggleMenu()
    })
    
})

