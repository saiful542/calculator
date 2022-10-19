let show_value = '';
let updated_value = ''
let display_calculation = document.querySelector('.display .calculation')
let display_answer = document.querySelector('.display .answer')
// let answer = 0;
let dot_counter = 0;
let i = 0;
let reducer_counter = 0;
let sum = 0;
let calculation_value = ''
let change_value = ''
const insert = (inserted_value) => {
    if (inserted_value == '=' || inserted_value == 'c' || inserted_value == 'del') {
        optional_calculation(inserted_value)
    }

    else if (inserted_value != '=' && inserted_value != 'c' && inserted_value != 'del') {

        if (!(isNaN(show_value[show_value.length - 1]) && isNaN(inserted_value))) {

            if (inserted_value == '.') {
                dot_counter++;
            }

            if (dot_counter <= 1 || inserted_value != '.') {

                change_value = inserted_value
                calculation_value += inserted_value
                if (change_value == '*')
                    change_value = 'x'
                show_value += change_value
                display_calculation.value = show_value;
                calculation(calculation_value, inserted_value)
                final_answer(eval(calculation_value))
            }
        }
    }
    // else
    //     calculation(calculation_value, inserted_value);



}

const calculation = (calculation_value, inserted_value) => {
    switch (inserted_value) {
        case '+':
            dot_counter = 0;
            break;
        case '-':
            dot_counter = 0;
            break;
        case '*':
            dot_counter = 0;
            break;
        case '/':
            dot_counter = 0;
            break;
    }


    // if (inserted_value == '+') {
    //     console.log(add(show_value))
    //     dot_counter = 0;
    // }
    // else if (inserted_value == '-') {
    //     console.log(subtraction(show_value))
    //     dot_counter = 0;
    // }
    // else if (inserted_value == '*') {
    //     console.log(multiply(show_value))
    //     dot_counter = 0;
    // }
    // else if (inserted_value == '/') {
    //     console.log(divide(show_value))
    //     dot_counter = 0;
    // }




}

// const add = (show_value) => {

//     updated_value =

//         console.log(sum)
//     console.log(show_value.split('+').slice(0, -1))

//     show_value.split('+').slice(0, -1).forEach(element => {
//         sum += parseFloat(element);
//     });



//     return sum;
// }
// const subtraction = (show_value) => {

//     console.log(show_value.split('-').slice(0, -1))

//     return sum;
// }
// const multiply = (show_value) => {

//     console.log(show_value.split('x').slice(0, -1))

//     return sum;
// }
// const divide = (show_value) => {

//     console.log(show_value.split('/').slice(0, -1))

//     return sum;
// }



const optional_calculation = (inserted_value) => {
    if (inserted_value == '=') {
        clear_update();
    }
    else if (inserted_value == 'c') {
        clear_display()
    }
    else {
        reducer();
    }
}

const clear_update = () => {
    final_answer(eval(calculation_value))
    show_value = ' ';
    display_calculation.value = show_value;
    clear_variables();
}
const clear_display = () => {
    show_value = ' ';
    display_calculation.value = show_value;
    display_answer.value = ''
    clear_variables();
}

const reducer = () => {
    let new_value = show_value.slice(0, -1);
    show_value = new_value;
    display_calculation.value = new_value;
    let new_calculation = calculation_value.slice(0, -1)
    calculation_value = new_calculation;
    final_answer(eval(calculation_value));

    if (show_value[show_value.length - 1] == '.') {
        dot_counter = 0;
    }
}


const final_answer = (answer) => {
    if (answer == undefined)
        answer = '0'
    display_answer.value = answer;

}


//clear all global variables
const clear_variables = () => {
    // i = 0;
    // sum = 0;
    // reducer_counter = 0;
    dot_counter = 0
    calculation_value = ' '
}

