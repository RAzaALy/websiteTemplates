// slider 

const slider = document.querySelector('.slideBar')
const toggleMenu = document.querySelector('.toggle') 

const toggleFunction = (e) =>{
    toggleMenu.classList.toggle('active')
    slider.classList.toggle('active')
}

toggleMenu.addEventListener('click',toggleFunction)


const allMenu = document.querySelectorAll('.menu li a')

function removeAllActiveClasses(){
    allMenu.forEach(menu => {
            menu.classList.remove('active')
            })
}


// console.log(allMenu)
allMenu.forEach(menu => {
    menu.addEventListener('click' , (e)=>{
        removeAllActiveClasses()
        toggleFunction()
        menu.classList.add('active')
    })
});


