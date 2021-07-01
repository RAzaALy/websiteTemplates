

// aos Functaionlity 



const header = document.querySelector('.header')


const toggle = document.querySelector('.toggle')

const anchors = document.querySelectorAll('header .navigation li a')

const navigation = document.querySelector('.navigation')



window.addEventListener('scroll' , (e)=>{
    header.classList.toggle('sticky' , window.scrollY > 0)
    navigation.classList.remove('active')
    toggle.classList.remove('active')
})



function toggleFunction(){
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
}


toggle.addEventListener('click' , toggleFunction)


anchors.forEach(anchor => {
    anchor.addEventListener('click' , toggleFunction)
})


