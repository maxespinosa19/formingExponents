const form = document.querySelector('form');
form.addEventListener("submit", baseAndPower);

function baseAndPower (event){
    event.preventDefault();
    const base = Number(event.target.base.value);
    const power = Number(event.target.power.value);
const result = Math.pow(base,power);
document.querySelector('h2').innerHTML = `${base}<sup>${power} </sup> = ${result}`

}
