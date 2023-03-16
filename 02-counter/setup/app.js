// declare global score variable 
let count = 0;

// get element with dom 
const value = document.getElementById('value')
const buttons = document.querySelectorAll('.btn')

// increase and decreese count 
buttons.forEach((button) => {
    button.addEventListener('click', (e) =>{
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0
        }
        value.innerText = count;
        if(count > 0){value.style.color = 'indigo'}
        if(count < 0){value.style.color = 'red'}
        if(count === 0){value.style.color = 'black'}
        
    })
})