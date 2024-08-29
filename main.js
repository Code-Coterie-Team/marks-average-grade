function displayRange(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    const result = sum / array.length;

    let grade;
    if (result < 70) {
        grade = "Grade D";
    } else if (result >= 70 && result < 79) {
        grade = "Grade C";
    } else if (result >= 80 && result < 89) {
        grade = "Grade B";
    } else if (result >= 90 && result <= 100) {
        grade = "Grade A";
    }

    console.log(grade);
    console.log("Average:", result);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
displayRange(numbers);

