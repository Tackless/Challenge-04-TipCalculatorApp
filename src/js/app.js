document.addEventListener('DOMContentLoaded', function() {
    startApp();
})
function startApp() {
    // const calculate = document.querySelector('#calculate');
    // calculate.addEventListener('click', () => {
    //     bill(0);
    // })
}
function calculate(id){
    if (id != 0) {
        const tip_percent = document.getElementById(id);
        tip_percent.classList.add('check');
        for(let i = 1; i<=5; i++ ){
            if (i != id) {
                document.getElementById(i).classList.remove('check');
            }
        }
        bill(tip_percent.value);
    }else {
        bill(0);
        for(let i = 1; i<=5; i++ ){
            document.getElementById(i).classList.remove('check');
        }
    }
}
function bill(percent){
    const tip_amount = document.querySelector('#tip-amount');
    const tip_total = document.querySelector('#tip-total');

    let bill = document.querySelector('#money');
    let people = document.querySelector('#persons');
    let amount = ((bill.value * percent) / people.value);
    if ((bill.value != 0) && (people.value != 0) ) {
        tip_amount.innerHTML = '$' + amount.toFixed(2);
        tip_total.innerHTML = '$' + (amount * people.value).toFixed(2);
    }
}
function custom() {
    const input_custom = document.getElementById('custom');
    input_custom.type = 'number';
    input_custom.value = '0';
}
function resetCustom() {
    const input_custom = document.getElementById('custom');
    input_custom.type = 'text';
    input_custom.value = 'Custom';
}
function reset(){
    // bill(0);
    calculate(0);
    const money = document.getElementById('money');
    const persons = document.getElementById('persons');
    money.value = '0';
    persons.value = '0';
}