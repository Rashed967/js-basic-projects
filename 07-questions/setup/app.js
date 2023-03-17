//using selectors inside the element
const questions = document.querySelectorAll('.question')

// loop on questions 
questions.forEach(question => {
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click', () => {
        question.classList.toggle('show-text')
        questions.forEach(item => {
            (item !== question) ? item.classList.remove('show-text') : ''
        })
    })
})




// traversing the dom
// // get all buttons 
// const btns = document.querySelectorAll('.question-btn')

// // run loop on qustions 
// btns.forEach( (btn) =>{
//     btn.addEventListener('click', (e) =>{
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text')
//     })
// })