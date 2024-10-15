let submitName = document.getElementById('submitName');
let submitAge = document.getElementById('submitAge');
let names = document.getElementById('names');
let age = document.getElementById('age');
let greeting = document.getElementById('greeting');
let idAge = document.getElementById('idAge');

submitName.addEventListener('click',() => {
greeting.textContent = `Welcome, ${names.value}!`
idAge.textContent = "";
});

submitAge.addEventListener('click',() => {
    greeting.textContent = "";
    if (names.value === "Luthor") {
        idAge.textContent = `You're an old head!`
         } else if (age.value >= 18) {
        idAge.textContent = `You're an adult!`
 } else if (age.value < 18) { 
     idAge.textContent = `You're essentially a baby!`
 } else {
     idAge.textContent = `Invalid!`
 }
}); 