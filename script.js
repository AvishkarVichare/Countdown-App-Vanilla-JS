const countdown = document.querySelector('#countdown');
const cInput = document.querySelector('#c-input');

const startBtn = document.querySelector('#start-btn');
const resetBtn = document.querySelector('#reset-btn');
let checkReset = false;
let checkIn = false;
// let count = 0;
let id =  null

startBtn.addEventListener('click',()=>{
    let ourValue = cInput.value;
    let currCount = 0;  
    let count = 0;
    checkReset = false;
    id = setInterval(countFun,1000);
    if(checkIn){
        console.log('clearing')
        clearInterval(id);

        checkIn = false;
    }

  

    function countFun () {
        checkIn = true;
        currCount = ourValue - count;
        if(currCount === 0 ){
            clearInterval(id);
           
        }
        
        countdown.innerHTML = currCount;
        count ++;
    }

  
})

resetBtn.addEventListener('click', ()=>{
    checkReset = true;
})