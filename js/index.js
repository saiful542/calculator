let updated_value = '';
let display_calculation = document.querySelector('.display .calculation')
let display_answer = document.querySelector('.display .answer')
let answer = 0;
const insert = (inserted_value) => {

    // if (isNaN(parseFloat(inserted_value))) {
    //     calculation(inserted_value, updated_value)
    // }

    updated_value = updated_value + inserted_value
    display_calculation.value = updated_value;
    final_answer(eval(updated_value))

}



// const calculation = (inserted_value, updated_value) => {
//     answer = eval(updated_value);
//     if (inserted_value == '=') {
//         final_answer(answer);
//     }
// }




const final_answer = (answer) => {
    display_answer.value = answer;
}

