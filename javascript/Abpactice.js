// for (var i = 5; i < 10; i++) {
//   console.log('go' + ' ' + i + ' ' + 'step');
// }

const { loadConfigFromFile } = require('vite');

// let i = 25;
// do {
//   console.log('go' + ' ' + i + ' ' + 'step');
//   i++;
// } while (i < 100);
// console.log('Fatema Afrin end');

// var num = 0;
// while (num < 10) {
//   console.log('inside the loop', +num);
//   num++;
// }
// console.log('out of the loop');

// for (var i = 0; i < 10; i++) {
//   if (i === 5) {
//     console.log('loop 5 is skiping');
//     continue;
//   }
//   console.log('i is now at: ' + i);
// }
// function sumMachine(a, b) {
//   var sum = a + b;
//   return sum;
// }

// console.log(sumMachine(2, 5));
// console.log(sumMachine(4, 10));

// function printMyName(name, age) {
//   console.log(
//     'My name is' +
//       ' ' +
//       name +
//       ' ' +
//       'and i am' +
//       ' ' +
//       age +
//       ' ' +
//       'years old.'
//   );
// }
// printMyName('Foysal Ahmed Sorker', 20);

// function callMyName(name, callback) {
//   var myAge = 20;
//   callback(myAge);
//   console.log('Is it interesting? Yes it is Mr.' + name);
// }
// function hello(age) {
//   console.log('I am passed through argument and my age is: ' + ' ' + age);
// }
// callMyName('Foysal Ahmed Sorker', hello);

// //
// function welcomeMsg(name) {
//   console.log('welcome Mr. ' + name);
//   return function options(menu) {
//     console.log('do you like' + menu + ' ' + 'Mr. ' + name);
//   };
// }
// welcomeMsg('Foysal Ahmed Sorker')('Coffee');

// //

// let display = something => {
//   console.log(something);
// };
// let HigherOrderFunc = (name, age, callBackf) => {
//   const Details = `My name is ${name} & i am ${age} years old`;
//   callBackf(Details);
// };
// HigherOrderFunc('Foysal Ahmed Sorker', 20, display);

// let displayone = something => {
//   console.log(something + ' foysal');
// };
// let HigherOrderFun = (name, age, callBackfunc) => {
//   let total = `my name is a ${name} and ${age} years old`;
//   callBackfunc(total);
// };
// HigherOrderFun('Foysal Ahmed Sarker', 25, displayone);

// let arrName = ['foysal', 'ahmed', 'sorker', 'fatema', 'afrin'];
// for (var i = 2; i < arrName.length; i++) {
//   console.log('NameF: ' + arrName[i]);
// }

// let familyName = [
//   'momotaz',
//   'forhad',
//   'fatema',
//   'foysal',
//   'abdullah',
//   'rahman',
// ];
// console.log(familyName.splice(2));
// let age = [10, 20, 30, 40];
// function getSquare(item) {
//   return item * item;
// }
// console.log(age.map(getSquare));
// var ages = age.map(ag => {
//   return ag * ag;
// });
// console.log(ages);

// var roll = [10, 20, 30, 40, 50, 60, 70];
// var rolls = roll.map((rol, index, fullarr) => {
//   return `each: ${rol} index:${index}, fullarr:${fullarr}`;
// });
// console.log(rolls);

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newNumber = number.filter(num => {
//   return num / 2 == 0;
// });
// console.log(newNumber);

// const taskOne = callback => {
//   console.log('Task1');
//   callback();
// };
// const taskTwo = callback => {
//   setTimeout(() => {
//     console.log('Task2, this is function loading');
//     callback();
//   }, 3000);
// };
// const taskThree = callback => {
//   console.log('Task3');
//   callback();
// };
// const taskFour = callback => {
//   console.log('Task4');
//   callback();
// };
// const taskFive = () => {
//   console.log('Task5');
// };
// taskOne(() => {
//   taskTwo(() => {
//     taskThree(() => {
//       taskFour(() => {
//         taskFive();
//       });
//     });
//   });
// });

// function changeValue(a) {
//   console.log('Value of a inside function before changing: ' + a);
//   a = 20;
//   console.log('Value of a inside function after changing: ' + a);
//   return a;
// }
// var a = 100;
// console.log('Value of a  before changing function is applied: ' + a);
// changeValue(a);
// console.log('Value of a after changing function is applied: ' + a);
// function display(boyos) {
//   console.log(`my age is ${boyos}`);
// }
// function callMyName(name, callBack) {
//   callBack(30);
//   console.log(`my name is ${name}`);
// }

// callMyName('Foysal Ahmed Sorker', display);
// var abullah = age => {
//   console.log('abdulla age is ' + age);
// };
// var foysalahmedsorker = (name, kapjap) => {
//   kapjap(3);
//   console.log(`my name is ${name}`);
// };
// foysalahmedsorker('Foysal Ahmed Sorker', abullah);

// function welcomeMsg(name) {
//   console.log(`welcome Mr. ${name}`);
//   return function options(menu) {
//     console.log('Do you like ' + menu);
//   };
// }
// welcomeMsg('foysal ahmed sorker')('programming');

// var foysalahmed = foysal => {
//   console.log('foysal: ' + foysal);
//   return (abdullah = abdul => {
//     console.log('abdul: ' + abdul);
//   });
// };
// foysalahmed('my name is a foysal ahmed sorker')('my name is a abdullah sorker');

// var rahim = {
//   fullName: 'Rahim Miya',
//   age: 21,
//   address: 'dhaka',
//   job: 'job holder',
// };

// const processOrder = customer => {
//   console.log(`processing order for customer 1`);
//   // var currentTime = new Date().getTime();
//   // while (currentTime + 3000 >= new Date().getTime());

//   setTimeout(() => {
//     console.log('cooking complate');
//   }, 3000);
//   console.log(`order processed for customer`);
// };
// console.log('take order for customer 1');
// processOrder();
// console.log('complated order for customer');

// const takeOrder = (customer, callBack) => {
//   console.log(`take order for ${customer}`);
//   callBack(customer);
// };
// const processOrder = (customer, callBack) => {
//   console.log(`processing order for ${customer}`);
//   setTimeout(() => {
//     console.log(`cooking complated`);
//     console.log(`order processed for ${customer}`);
//     callBack(customer);
//   }, 3000);
// };
// const complateOrder = customer => {
//   console.log(`complated order for ${customer}`);
// };
// takeOrder('customer o2', customer => {
//   processOrder(customer, () => {
//     complateOrder(customer);
//   });
// });

// const takeOrder = (customer, callBack) => {
//   console.log(`take order for ${customer}`);
//   callBack(customer);
// };
// const processOrder = (customer, callBack) => {
//   console.log(`processing order for ${costomer}`);
//   setTimeout(() => {
//     console.log(`cooking complated`);
//     console.log(`order processed for ${customer}`);
//     callBack(customer);
//   }, 3000);
// };
// const complatedOrder = (customer) => {
//   console.log(`complated order for ${customer}`)
// }
