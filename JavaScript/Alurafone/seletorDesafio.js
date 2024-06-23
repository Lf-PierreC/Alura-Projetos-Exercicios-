/*function digitar() {
    let num = document.querySelectorAll('.teclado button')
    let bina = document.getElementById('input[type="tel"')
    
    num.forEach(button => {
        button.addEventListener('click', () =>{
            bina.value += button.textContent
        })
    })

}

// input[type="button"][value="' + value +'"] [value="&{value}"]

function digitar(value) {
    let num = document.querySelectorAll('.teclado button')
    let bina = document.getElementById('place')

    for (let i=0; i < 5; i++){
    let buttonText = button.textContent
    
    bina.value = num[i].textContent
    }
}
*/

function digitar(value) {
    let bina = document.getElementById('place')
    bina.value += value 
}

function apagar() {
    let bina = document.getElementById('place')
    let currentValue = bina.value;
    if (currentValue.length > 0) {
        bina.value = currentValue.slice(0, -1);
    }
}