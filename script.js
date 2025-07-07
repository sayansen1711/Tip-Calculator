// When an event you're listening for occurs on a specific HTML element, the event listener triggers a 
// callback function – a block of JavaScript code that you define to run in response to that event.
// The primary method for attaching an event listener is element.addEventListener(eventType, callbackFunction);.

// --Selecting all input fields--

//Fetching the bill amount input 
const billAmountInput=document.getElementById('bill');

billAmountInput.addEventListener('input',(event)=>{
    const currentBillAmount=Number(event.target.value); //getting the value of the input field on the event of user input
    console.log(currentBillAmount);
});
//fetching all tip percent buttons
const tipPercentButtons=document.querySelectorAll('.tip-percent-btn');

tipPercentButtons.forEach((button)=>{ //forEach(param:button) is used to iterate over each node from NodeList returned by querySelectorAll
    button.addEventListener('click',(event)=>{ //event listener(type of event:click, event handler function ()=>)
        const clickedButton=event.target; //event.target selects the button that was clicked
        const clickedButtonValue=Number(clickedButton.value); //storing the value of the clicked button
        console.log('clicked button',clickedButtonValue+"%");
    })
});

//fetching the custom tip input
const customTipInput=document.getElementById('custom-tip-input');

customTipInput.addEventListener('input',(event)=>{
    const customTipAmount=Number(event.target.value); //getting the value of the input field on the event of user input
    console.log('Custom tip input value',customTipAmount+"%");
});

//fetching the number of people input
const peopleCountInput=document.getElementById('num-people');

peopleCountInput.addEventListener('input',(event)=>{
    const peopleCount=Number(event.target.value);
    console.log('Number of people',peopleCount);
})

function calcuateTip(){
    
}

// -- Selecting output fields --
//selecting the total tip / person output field
const tipPerPersonOutput=document.getElementById('tip-amount-display');

//selecting the total amount /person output field
const amountPerPersonOutput=document.getElementById('total-amount-display');

// Action Button
//selecting the reset button
const resetBtn=document.querySelector('.reset-btn');
//Validation
console.log(billAmountInput);
console.log(tipPercentButtons);
console.log(customTipInput);
console.log(peopleCountInput);
console.log(tipPerPersonOutput);
console.log(amountPerPersonOutput);
console.log(resetBtn);

