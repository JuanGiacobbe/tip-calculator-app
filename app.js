// DOM SECTION

const bill = document.querySelector('.bill');
const btns = document.querySelectorAll('.btn');
const people = document.querySelector('.people');

btns.forEach(function(btn){
    btn.addEventListener('click', (e)=>{
        e.preventDefault();


        let tip = (parseInt(bill.value) * (parseInt(btn.value)/100));
        let total = parseInt(bill.value) + tip;
        console.log(total);
    })
})
