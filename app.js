// DOM SECTION

const bill = document.querySelector('.bill');
const btns = document.querySelectorAll('.btn');
const people = document.querySelector('.people');
const tipText = document.querySelector('.tip-text');
const totalText = document.querySelector('.total-text');

// EVENTS
btns.forEach(function(btn){
    btn.addEventListener('click', (e)=>{
        e.preventDefault();

        // OPERATIONS
        let tip = (parseInt(bill.value) * (parseInt(btn.value)/100));
        let tipPeople = tip / people.value;
        let total = parseInt(bill.value) + tip;
        let totalPeople = total / people.value;

        // DOM MODIFICATIONS
        let tipLine = document.createElement('p');
        tipLine.textContent = tipPeople;
        let totalLine = document.createElement('p');
        totalLine.textContent = totalPeople;

        tipText.appendChild(tipLine);
        totalText.appendChild(totalLine);

        bill.value = '';
        people.value = '';
        btn.classList.add('active');
    })
})
