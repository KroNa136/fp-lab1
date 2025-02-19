// 1. Разработайте набор чистых функций для работы с массивами.

// Функция, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.

const getEvenNumbers = (numbers) =>
    numbers.filter((n) => n % 2 == 0);

// Функция, которая принимает массив чисел и возвращает новый массив, содержащий квадраты этих чисел.

const getSquares = (numbers) =>
    numbers.map((n) => n ** 2);

// Функция, которая принимает массив объектов и возвращает новый массив, содержащий только объекты с определенным свойством.

const getStudentsOlderThanAge = (students, age) =>
    students.filter((student) => student.age > age);

// Функция, которая принимает массив чисел и возвращает их сумму.

const getSum = (numbers) =>
    numbers.reduce((sum, current) => sum + current);

// 2. Создайте функцию высшего порядка, которая принимает функцию и массив в качестве аргументов и применяет функцию к каждому
//    элементу массива, возвращая новый массив с результатами.

const applyFunctionToEach = (arr, func) =>
    arr.map((item) => func(item));

// 3. Используя разработанные функции, выполните следующие математические операции.

// Найдите сумму квадратов всех чётных чисел в заданном массиве.

const getSumOfSquaresOfEvenNumbers = (numbers) =>
    getSum(getSquares(getEvenNumbers(numbers)));

// Найдите среднее арифметическое всех чисел, больших заданного значения, в заданном массиве объектов.

const getAverageAgeLargerThanThreshold = (students, ageThreshold) => {
    const agesLargerThanThreshold = getStudentsOlderThanAge(students, ageThreshold)
        .map((student) => student.age);

    const length = agesLargerThanThreshold.length;
    return length > 0 ? getSum(agesLargerThanThreshold) / length : 0;
};

// Тестирование функций.

const numberArr = [0, -1, 2, -3, 4, -5, 6, -7];

const studentArr = [
    { name: "Anthony", age: 20 },
    { name: "Jessica", age: 21 },
    { name: "Peter", age: 22 },
    { name: "Mary", age: 23 }
];

const studentArrayToStr = (students) =>
    `[${students.map((student) => `{name: \'${student.name}\', age: ${student.age}}`)}]`;

console.log(`Используемый массив чисел: [${numberArr}]`);
console.log(`Используемый массив студентов: ${studentArrayToStr(studentArr)}`);

console.log();

console.log(`Чётные числа: [${getEvenNumbers(numberArr)}]`);
console.log(`Квадраты всех чисел: [${getSquares(numberArr)}]`);
console.log(`Студенты старше 21 года: ${studentArrayToStr(getStudentsOlderThanAge(studentArr, 21))}`);
console.log(`Сумма всех чисел: ${getSum(numberArr)}`);

console.log();

const incrementStudentAge = (student) => ({ name: student.name, age: student.age + 1 });
console.log(`Инкремент возраста всех студентов с помощью функции высшего порядка:\n${studentArrayToStr(applyFunctionToEach(studentArr, incrementStudentAge))}`);

console.log();

console.log(`Сумма квадратов чётных чисел: ${getSumOfSquaresOfEvenNumbers(numberArr)}`);
console.log(`Среднее арифметическое возрастов студентов, больших 21: ${getAverageAgeLargerThanThreshold(studentArr, 21)}`);
