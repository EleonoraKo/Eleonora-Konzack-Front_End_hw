let out1 = document.querySelector('.out-1');
function f1() {
    out1.innerHTML = 1;
}

document.querySelector('.b-1').onclick = f1;


let inputIn08 = document.querySelector('.i-8');
let inputIn09 = document.querySelector('.i-9');
let button8 = document.querySelector('b-8');
// let div08 = document.querySelector('.out-8');
function t8() {
    let out = '';
    let inputIn08 = +document.querySelector('.i-8').value;
    // let inputIn09 = +document.querySelector('.i-9').value;
    for (let i = 0; i <=inputIn08 ; i++) {
        out += `****** <br>`
    }
    document.querySelector('.out-8').innerHTML = out
}
document.querySelector('.b-8').onclick = t8;
