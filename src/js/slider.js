const workSlide = () => {
    
    const myWork = document.querySelectorAll('.my-work')
    let currentWorkIndex = 0

    const showWork = () => {
        myWork[currentWorkIndex].style.opacity = 0
        currentWorkIndex = (currentWorkIndex + 1) % myWork.length
        myWork[currentWorkIndex].style.opacity = 1

    }



    setInterval(showWork, 3000)



}

workSlide()