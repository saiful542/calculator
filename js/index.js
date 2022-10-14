let show_value = '';
let updated_value = ''
let display_calculation = document.querySelector('.display .calculation')
let display_answer = document.querySelector('.display .answer')
let answer = 0;
let dot_counter = 0;
let i = 0;
let reducer_counter = 0
const insert = (inserted_value) => {
    // if (isNaN(parseFloat(inserted_value))) {
    //     calculation(inserted_value, show_value)
    // }
    // console.log(inserted_value)
    if (inserted_value == '=' || inserted_value == 'c' || inserted_value == 'del') {
        optional_calculation(inserted_value)
    }

    if (inserted_value != '=' && inserted_value != 'c' && inserted_value != 'del') {
        // if ((show_value[show_value.length - 1] != inserted_value)  && (!isNaN(inserted_value))) {
        //     show_value += inserted_value
        //     display_calculation.value = show_value;
        //     // final_answer(eval(show_value))
        //     calculation(show_value, inserted_value)
        // }

        if (!(isNaN(show_value[show_value.length - 1]) && isNaN(inserted_value))) {
            // if (inserted_value === '.') {
            //     console.log(typeof(parseFloat(inserted_value)))
            //     dot_counter++;
            // }
            // if (dot_counter <= 1) {

            // }

            show_value += inserted_value
            display_calculation.value = show_value;
            // final_answer(eval(show_value))
            calculation(show_value, inserted_value)
            // dot_counter++;

        }
    }
    else
        calculation(show_value, inserted_value);



}

const calculation = (show_value, inserted_value) => {
    if (inserted_value == '+') {
        console.log(add(show_value))
        // console.log(parseFloat(show_value.split('+')[0]));
        // console.log(show_value.split('+')[0])
    }
    if (inserted_value == '-') {
        console.log(subtraction(show_value))
    }
    if (inserted_value == 'x') {
        console.log(multiply(show_value))
    }
    if (inserted_value == '/') {
        console.log(divide(show_value))
    }


}
let sum = 0;
const add = (show_value) => {

    // updated_value = 
    // let p = show_value.split('+').slice(0, -1).forEach(element => {
    //     sum += parseFloat(element);
    // });
    if (reducer_counter==0) {
        console.log(i)
        sum += parseFloat(show_value.split('+')[i]);
        i++;
        reducer_counter = 1;
    }

    // updated_value = toString(sum);
    return sum;
}
const subtraction = (show_value) => {
    let sum = 0;
    updated_value = show_value.split('-')
    let p = updated_value.slice(0, -1).forEach(element => {
        sum -= parseFloat(element);
    });

    return sum;
}
const multiply = (show_value) => {
    let sum = 0;
    updated_value = show_value.split('+')
    let p = updated_value.slice(0, -1).forEach(element => {
        sum += parseFloat(element);
    });

    return sum;
}
const divide = (show_value) => {
    let sum = 0;
    updated_value = show_value.split('+')
    let p = updated_value.slice(0, -1).forEach(element => {
        sum += parseFloat(element);
    });

    return sum;
}



const optional_calculation = (inserted_value) => {
    if (inserted_value == '=') {
        clear_update();
    }
    if (inserted_value == 'c') {
        clear_display()
    }
    else {
        reducer();
    }
}


const clear_display = () => {
    show_value = ' ';
    display_calculation.value = show_value;
    final_answer('');
    clear_variables();
}
const clear_update = () => {
    show_value = ' ';
    display_calculation.value = show_value;
    clear_variables();

}

const reducer = () => {
    let new_value = show_value.slice(0, -1);
    show_value = new_value;
    display_calculation.value = new_value;
    i--;
    reducer_counter = 1;
    return reducer_counter;
}


const final_answer = (answer) => {
    display_answer.value = answer;
}


//clear all global variables
const clear_variables = () => {
    i = 0;
    sum = 0;
    reducer_counter = 0;
}

