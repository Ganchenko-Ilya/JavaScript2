//Задание 1
// Перепишите код с использованием тернарного оператора
// let males = true;
// let gender;
// if (male) {
// gender = 'man';
// } else{
// gender = 'woman'
// }

let male = true;
let gender = male ? 'man' : 'woman';
console.log(gender);




// Задание 2
// Создать переменную и записать в нее число, например 10.

// 10 раз увеличивать значение этой переменной на 1. Результат вывести в консоль.




for(let i = 10;i <= 20;i++ ){
console.log(i);
}




// Задание 3
// Увеличивая счетчик цикла на 2, нужно 5 раз:

// - запрашивать у пользователя ввод числа

// - проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"



for(let i = 2;i <=10 ;i += 2){
let num1 = +prompt('число1');
let result = i == num1  ? 'Равно 10':'Не равно 10';
console.log(result);
}




// Задание 4
// Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
// * Задавать количество чисел, которые нужно вывести, при помощи функции prompt.



let num2 = +prompt("Максимальное колличество 100(не включая 100)");
if (num2 >= 100) {
  alert("ERROR");
} else {
  for (let i = 0; i <= num2; i++) {
    let square = i ** 2;
    console.log(square);
  }
}




// Задание 5
// Напишите программу, которая выводит в консоль числа от 1 до 100.
// При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»







for (let i = 1; i <= 100; i++) {
  let num5 = i;
  if (num5 % 3 !== 0 && num5 % 5 !== 0) {
    num5 = num5;
  } else if (num5 % 5 == 0 && num5 % 3 !== 0) {
    num5 = "Buzz";
  } else if (num5 % 3 == 0 && num5 % 5 == 0) {
    num5 = "FizzBuzz";
  } else if (num5 % 3 == 0) {
    num5 = "Fizz";
  }
  console.log(num5);
}




// Задание 6
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.




for (let i = 0; i < 3; i++) {
alert( `number ${i}!` );
}
let i = 0;
while(i  < 3){
    i++;
    alert(`number ${i}!`)
}





// Задание 7
// Написать функцию вывода в консоль случайного цвета. Это будет строка вида "rgb(10,55,250)"
// Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):
// function getRandomInteger(min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// }
// Подсказка:
// Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255.

// Одна функция может вызывать другую функцию




  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const getRandomRGB = () => {
  let color1 = getRandomInteger(0, 255);
  let color2 = getRandomInteger(0, 255);
  let color3 = getRandomInteger(0, 255);

  let result7 = `rgb(${color1},${color2},${color3})`;
  return result7;

};
console.log(getRandomRGB());




// Задание 8
// Написать функцию isInteger(x), которая определяет, является ли число целым, и возвращает true либо false.



let number8 = +prompt('Введите число');
const isInteger = (x) =>{
    let result8 = number8 % 1 == 0 ? true : false;
    return result8;

}
console.log(isInteger());



// Задание 9
// Написать функцию, которая принимает целое число n.
// Внутри функции запустить цикл от 1 до n с шагом 0.5. На каждой итерации цикла выводить в консоль текущее число (i) и информацию о том, целое ли оно.
// Пример, при запуске функции с параметром 3:

// "1 integer"
// "1.5 decimal"
// "2 integer"

// "2.5 decimal"

const numberInteger = (n) => {
    
  for (let i = 1; i <= n ; i += 0.5) {
    
    if (i % 1 == 0) {
      
      console.log("integer");
     
    } else {
      
       console.log("decimal");
     
    }
    
    
  }
  
  
  
};
console.log(numberInteger(5));
