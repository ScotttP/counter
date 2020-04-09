const addition = document.querySelector('#addition');
const subtraction = document.querySelector('#subtraction');
const reset = document.querySelector('#reset');

let curValue = 0;
document.getElementById('displayCount').innerHTML= curValue;


addition.addEventListener('click', () => {
    addCount();
})

subtraction.addEventListener('click', () => {
    subtractCount();
})

reset.addEventListener('click', () => {
    resetCount();
})

function addCount(){
    document.getElementById('displayCount').innerHTML= ++curValue;
}
function subtractCount (){
    document.getElementById('displayCount').innerHTML= --curValue;
   
}
function resetCount (){
    document.getElementById('displayCount').innerHTML= curValue -= curValue;
}