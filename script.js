const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const result = document.querySelector('#result')

/* btnCalcular.addEventListener('click', btnOnClick)

function btnOnClick(){
     let suma = parseInt(input1.value) + parseInt(input2.value);
     result.innerText = 'Tú suma es: '+ suma.toString();

} */

form.addEventListener('submit', sumarInputValues)

function sumarInputValues(event){
     console.log({event});
     event.preventDefault();
     let suma = parseInt(input1.value) + parseInt(input2.value);
     result.innerText = 'Tú suma es: '+ suma.toString();

} 