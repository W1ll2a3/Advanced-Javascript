"use strict";
/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10 );


console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name convention
let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);




let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);



let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';


lastName = 'Schmedtmann';
console.log(lastName);


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log( firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x)

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);


// Challenge 1
//const massMark = 78;
//const heightMark = 1.69;
//const massJohn = 92;
//const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ' , a ' +  (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`just a regular string...`);

console.log('string with \n\
multiple \n\
lines');

console.log(`string
multiple
lines`);


const age = 15;

if (age >= 18) {
console.log('Sarah can start driving license');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn}!`)
} else {
  console.log("John's BMI is higher than Mark's!")
}


// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);


// 5 falsy values: 0, '', undefined, Null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED')
}


const age = '18';
if (age === 18) console.log('You just became an adult : D (strict)');

if (age == 18) console.log('You just became an adult : D (loose)');

const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}


// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
// console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
// console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas) {
// console.log('Both win the trophy!');
// }

// BONUS 1
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
// console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
// console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas) {
// console.log('Both win the trophy!');
// }


// BONUS 2
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy');
}


const day = 'monday';

switch (day) {
case 'monday': // day === 'monday'
console.log('Plan course structure');
console.log('Go to coding meetup');
  break;
case 'tuesday':
console.log('Prepare theory videos');
  break;
case 'wednesday':
case 'thursday':
console.log('Write code examples');
  break;
case 'friday':
  console.log('Record videos');
  break;
case 'saturday':
case 'sunday':
  console.log('Enjoy the weekend : D')
    break;
    default:
  console.log('Not a valid day!')

}

if (day === 'monday') {
  console.log('Plan course structure');
console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend : D')
} else {
  console.log('Not a valid day!')
}

3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`)


const age = 23;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : water}`);


const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip} `);


'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
//const if = 23;


function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }
//const age2 = calcAge2(1991);

//console.log(age1, age2);


// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}


// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));



function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);


  const juice = `Juice with ${applePieces} piece of apple and  ${orangePieces} pieces of oranges.`;
  return juice;
  }
  console.log(fruitProcessor(2, 3));
  

  const calcAge = function (birthYear) {
    return 2037 - birthYear;
  }


  const yearsUntilRetirement = function (birthYear, firstName)  {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`);
      return retirement;
    
    } else {
      console.log(`${firstName} has already retired`);
      return -1;
    }
    
  }

  console.log(yearsUntilRetirement(1991, 'Jonas'));
  console.log(yearsUntilRetirement(1970, 'Mike'));
  

  const calcAverage = (a, b, c) => (a + b + c) / 3;
  console.log(calcAverage(3, 4, 5));

  // Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
  console.log(scoreDolphins, scoreKoalas);

  const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
      console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
      console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins} )`);
    } else {
      console.log('No team wins...');
    }
  }
  checkWinner(scoreDolphins, scoreKoalas);

  checkWinner(576, 111);

  // Test 2
  scoreDolphins = calcAverage(85, 54, 41);
  scoreKoalas = calcAverage(23, 34, 27);
  console.log(scoreDolphins, scoreKoalas);
  checkWinner(scoreDolphins, scoreKoalas);
  

  const friend1 = 'Michael';
  const friend2 = 'Steven';
  const friend3 = 'Peter';

  const friends = ['Michael', 'Steven', 'Peter'];
  console.log(friends);

  const y = new Array(1991, 1984, 2008, 2020);

  console.log(friends[0]);
  console.log(friends[2]);

  console.log(friends.length);
  console.log(friends[friends.length - 1]);

  friends[2] = 'Jay';
  console.log(friends);

  const firstName = 'Jonas';
  const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
  console.log(jonas);
  console.log(jonas.length);

  // Exercise
  const calcAge = function (birthYear) {
    return 2037 - birthYear;
  }
  const years = [1990, 1967, 2002, 2010, 2018];

  const age1 = calcAge(years[0]);
  const age2 = calcAge(years[1]);
  const age3 = calcAge(years[years.length - 1]);
  console.log(age1, age2, age3);

  const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
  console.log(ages);
  

  const friends = ['Michael', 'Steven', 'Peter'];

  // Add elements
  const newLength = friends.push('Jay');
  console.log(friends);
  console.log(newLength);

  friends.unshift('John');
  console.log(friends);

  // Remove elements
  friends.pop(); // last
  const popped = friends.pop();
  console.log(popped);
  console.log(friends);

  friends.shift(); // First
  console.log(friends);

  console.log(friends.indexOf('Steven'));
  console.log(friends.indexOf('Bob'));

  friends.push = 23;
  console.log(friends.includes('Steven'));
  console.log(friends.includes('Bob'));
  console.log(friends.includes(23));

  if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
  }
  

  const calcTip = function (bill) {
    return bill >= 50 && bill <= 300? bill * 0.15 :
    bill * 0.2;
  }
  // const calcTip = bill => bill >= 50 && bill <= 300
 // ? bill * 0.15 : bill * 0.2;
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};



const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last'] + nameKey);

 // console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Chooose between firstName, lastName, age, job, and friends');


if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Chooose between firstName, lastName, age, job, and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas)

 // Challenge
 // "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);



const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function(birthYear) {
  //   return 2037 - birthYear;
  // }
  // calcAge: function(birthYear) {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // }
calcAge: function(birthYear) {
  this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }

};
console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);



console.log(jonas.getSummary());

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license".



const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

//console.log(mark.calcBMI());

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}


// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4')
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9')
// console.log('Lifting weights repetition 10');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
};





const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];


 //console.log(jonas[0]);
 //console.log(jonas[1]);
 //...
 //console.log(jonas[4]);
 //jonas[5] does NOT exist

  for ( let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
   // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
  }

  console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

  for ( let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
  }

  console.log(ages);

  // contnue and break
  console.log('---ONLY STRINGS---')
  for ( let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
  }


  console.log('---BREAK WITH NUMBER---')
  for ( let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    
    console.log(jonas[i], typeof jonas[i]);
  }
  

  const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
    ];

    // 0,1,...,4
    // 4,3...,0

    for (let i = jonas.length - 1; i >= 0; i--) {
      console.log(i, jonas[i]);
    }

    for ( let exercise = 1; exercise < 4; exercise++) {
      console.log(`------Starting exercise ${exercise}`);

      for (let rep = 1; rep < 6; rep++) {
        console.log(` Exercise ${exercise}: Lifting weight repetition ${rep}`);
      }
    

      // for (let rep = 1; rep <= 10; rep++) {
      //   console.log(`Lifting weights repetition ${rep}`);
      // };

      let rep = 1;
      while (rep <= 10) {
       // console.log(`WHILE: lifting weights repetition ${rep}`);
       // rep++;
      }

      let dice = Math.trunc(Math.random() * 6) + 1;
      
      while (dice !== 6) {
        console.log(`You rolled a ${dice}`);
        dice = Math.trunc(Math.random() * 6) + 1;
        dice++;
        if (dice === 6) console.log('Loop is about to end.....');
        dice++;
      }
      

      const calcTip = function (bill) {
        return bill >= 50 && bill <= 300? bill * 0.15 :
        bill * 0.2;
      }
      const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
      const tips = [];
      const totals = [];

      for (let i = 0; i < bills.length; i++) {
        const tip = calcTip(bills[i]);
        tips.push(tip);
          totals.push(tip + bills[i]);
  }
console.log(bills, tips, totals);

  const calcAverage = function (arr) {
          let sum = 0;
          for ( let i = 0; i < arr.length; i++) {
            // sum = sum + arr[i];
            sum += arr[i];
          }
          return sum / arr.length;

        }
      console.log(calcAverage([2, 3, 7]));
      console.log(calcAverage(totals));
      console.log(calcAverage(tips));
      

const x = 23;
if (x === 23) console.log(26);

const calcAge = birthYear => 2037 - birthYear;

console.log();


const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;


    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);


// Merge 2 arrays


const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitudeNew = function (t1, t2) {
const temps = t1.concat(t2);
console.log(temps)


  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;


    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);



const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',

    // C) FIX
    //value: Number( prompt('Degree celsius:')),
  //};
  
  value: 10,

  // B) FIND
  console.table(measurement);

  //console.log(measurement.value);
  // console.warn(measurement.value);
  // console.erroe(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
//};
// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps)
  
  
    let max = 0;
    let min = 0;
  
    for (let i = 0; i < temps.length; i++) {
      const curTemp = temps[i];
      if (typeof curTemp !== 'number') continue;
  
  
      if (curTemp > max) max = curTemp;
      if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
  };
  
  const amplitudeBug = calcTempAmplitudeBug([3, 5, 1],
  [9, 4, 5]);
  // A) IDENTIFY
  console.log(amplitudeBug);
  

  const data1 = [17, 21, 23];
  const data2 = [12, 5, -5, 0, 4];

  console.log(`...${data1[0]})°C ...${data1[1]}°C ...${data1[2]}°C ...`);

  const printForecast = function(arr) {
    let str = '';
    for(let i = 0; i < arr.length; i++) {
      str = str + `${arr[i]}°C in ${i + 1} days ...`;
    }
    console.log('...' + str);
  };
  printForecast(data1);
  

  function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
      let output = `${firstName}, you are ${age}, born in ${birthYear}`;
      console.log(output);

      if(birthYear >= 1981 && birthYear <= 1996) {
        var millenial = true;
        // Creating NEW variable with same name as outer scope's variable
        const firstName = 'Steven';
        // Reassigning outer scope's variable
       output = 'NEW OUTPUT!'
        const str = `Oh, and you're a millenial, ${firstName}`;
        console.log(str);

        function add(a, b) {
          return a + b;
        }

    
      }
      // console.log(str);
      console.log(millenial);
      // console.log(add(2, 3));
      console.log(output);
    }
    printAge();

    return age;
  }

  const firstName = 'Jonas';
  calcAge(1991);
  // console.log(age);
  // printAge();
  

  // Variables
  console.log(me);
  // console.log(job);
  // console.log(year);

  var me = 'Jonas';
  let job = 'teacher';
  const year = 1991;

  // Functions
  console.log(addDecl(2, 3));
  // console.log(addExpr(2, 3));
  console.log(addArrow);
  // console.log(addArrow(2, 3));

  function addDecl(a, b) {
    return a + b;
  }

  const addExpr = function (a, b) {
    return a + b;
  };

  var addArrow = (a, b) => a + b;

  // Example
  console.log(undefined);
  if (!numProducts) deleteShoppingCart();

  var numProducts = 10;

  function deleteShoppingCart() {
    console.log('All products deleted!');
  }

  var x = 1;
  let y = 2;
  const z = 3;

  console.log(x === window.x);
  console.log(y === window.x);
  console.log(z === window.x);
  

  //console.log(this);

  const calcAge = function (birthYear) {
   console.log(2037 - birthYear);
    console.log(this);
  };
  calcAge(1991);

  const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
  };
  calcAgeArrow(1980);

  const jonas = {
    year: 1991,
    calcAge: function () {
      console.log(this);
      console.log(2037 - this.year);
    },

  };
  jonas.calcAge();

  const matilda = {
    year: 2017,
  };

  matilda.calcAge = jonas.calcAge;
  matilda.calcAge();

  const f = jonas.calcAge;
  f();
  

  //var firstName = 'Matilda';

  const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
      //console.log(this);
      console.log(2037 - this.year);
       
      // Solution 1
      // const self = this; // self or that
      // const isMillenial = function () {
      //   console.log(self);
      //   console.log(self.year >= 1981 && self.year <= 1996);
      //   // console.log(this.year >= 1981 && this.year <= 1996);
      // };

      // Solution 2
      const isMillenial = () => {
        console.log(this);
        console.log(this.year >= 1981 && this.year <= 1996);
        };
      isMillenial();
    },

    greet: () => {
      console.log(this);
      console.log(`Hey ${this.firstName}`);
    },
  }; 
  jonas.greet();
  jonas.calcAge();

  // arguments keyword
  const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
  };
  addExpr(2, 5);
  addExpr(2, 5, 8, 12);

  // var addArrow = (a, b) {  
  //   console.log(arguments);
  //   return a + b;
  //  };
  // addArrow(2, 5, 8);
  

  let age = 30;
  let oldAge = age;
  age = 31;
  console.log(age);
  console.log(oldAge);

  const me = {
    name: 'Jonas',
    age: 30,
  };
  const friend = me;
  friend.age = 27;
  console.log('Friend:', friend);
  console.log('Me', me);
  

  // Primitive types
  let lastName = 'Williams';
  let oldLastName = lastName;
  lastName = 'Davis';
  console.log(lastName, oldLastName);

  // Reference types
  const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
  };
  const marriedJessica = jessica;
  marriedJessica.lastName = 'Davis';
  console.log('Before marriage:', jessica);
  console.log('After marriage:', marriedJessica);
  // marriedJessica = {};

  // Copying objects
  const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
  };

  const jessicaCopy = Object.assign({}, jessica2);
  jessicaCopy.lastName = 'Davis';

  jessicaCopy.family.push('Mary');
  jessicaCopy.family.push('John');

  console.log('Before marriage:', jessica2);
  console.log('After marriage:', jessicaCopy);
  

  const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  openingHours = {
      [weekdays[3]]: {
        open: 12,
        close: 22,
      },
      [weekdays[4]]: {
        open:11,
        close:23,
      },
      [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
   const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 enhanced object literals
    openingHours,
  

    order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
      console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza(mainIngredient, ...otherIngrdients) {
      console.log(mainIngredient);
      console.log(otherIngrdients);
    },
  };

  restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
  });

  restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
  });
  
   
   const arr = [2, 3, 4];
  // const a = arr[0];
  // const b = arr[1];
  // const c = arr[2];

  const [x, y, z] = arr;
  console.log(x, y, z);
  console.log(arr);

  let [main, , secondary] = restaurant.categories;
  console.log(main, secondary);

   // Switching variables
  // const temp = main;
  // main = secondary;
  // secondary = temp;
  // console.log(main, secondary);

  [main, secondary] = [secondary, main];
  console.log(main, secondary);

  // Receive 2 return values from a function
  const [starter, mainCourse] = restaurant.order(2, 0);
  console.log(starter, mainCourse);

  // Nested destructuring
  const nested = [2, 4, [5, 6]];
  //const [i, , j] = nested;
  //console.log(i, j);
  const [i, , [j, k]] = nested;
  console.log(i, j, k);

  // Default values
  const [p = 1, q = 1, r = 1] = [8, 9];
  console.log(p, q, r);

  const { name, openingHours, categories} = restaurant;
  console.log(name, openingHours, categories);

  const { name: restaurantName, openingHours: hours, categories: tags} = restaurant;
  console.log(restaurantName, hours, tags);

  // Default values
  const { menu = [], starterMenu: starters = [] } = restaurant;
  console.log(menu, starters);

  // Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14};
({ a, b} = obj);
console.log(a, b);

// Nested objects
const { fri: { open: o, close: c}, } = openingHours;
console.log(o, c);

// The Spread Operator (...)
const goodArr = [7, 8, 9];
const badNewArr = [1, 2, goodArr[0], goodArr[1], goodArr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...goodArr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);

// Real-world example
const ingredients = [
  //prompt("Let's make pasta! Ingredient 1?"),
  //prompt('Ingrdient 2?'),
 // prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guisppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// 1) Destructuring
// SPREAD, because on right side of =
const arr1 = [1, 2, ...[3, 4]];

// REST, because on left side of =
const [e, f, ...others] = [1, 2, 3, 4, 5];
console.log(e, f, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
let sum = 0;
for ( let i = 0; i < numbers.length; i++) sum += numbers[i];
console.log(sum);
};


add(2, 3);
add(5, 3, 7, 2,);
add(8, 2, 5, 3, 2, 1, 4);

const h = [23, 5, 7];
console.log(...h);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
//rest1.owner = rest1.owner && 'ANONYMOUS';
//rest2.owner = rest2.owner && 'ANONYMOUS';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);


const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3
const allPlayers = [...players1, players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);

// 5
const {odds: { team1, x: draw, team2},} = game;
console.log(team1, draw, team2);

// 6
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7
team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win);

const menu = [...restaurant.staterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
};






const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open:11,
      close:23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  }
  

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread','Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

   order(starterIndex, mainIndex) {
     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },
   
  

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngrdients) {
    console.log(mainIngredient);
    console.log(otherIngrdients);
  },

}




restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);
/*

//  WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Methods does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Methods does not exist');


// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.com' }];
// const users = [];

console.log(users[0]?.name?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');


// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`

for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

// Properties VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
//console.log(entries);

for ( const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}


// Coding challenge
// 1.
for (const [i, player] of Gamepad.scored.entries())
console.log(`Goal ${i + 1}: ${players}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odds;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}


const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza',]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size);

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

  console.log(rest.get('name'));
  console.log(rest.get('true'));

  const time = 8;
  console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

  console.log(rest.has('categories'));
  rest.delete(2);
  //rest.clear();

  const arr = [1, 2];
  rest.set(arr, 'Test');
  rest.set(document.querySelector('h1'), 'Heading');
  console.log(rest);
  console.log(rest.size);

  console.log(rest.get(arr));
  */

/*
  const question = new Map([
    ['question', 'What is the best programing language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'correct'],
    [false, 'Try again'],
  ]);
  console.log(question);

  // Convert object to map
 // console.log(Object.entries(openingHours));
  //const hoursMap = new Map(Object.entries(openingHours));

  //console.log(hoursMap);
  // Quiz app
  console.log(question.get('question'));
  for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
  }

 // const answer = Number(prompt('Your answer'));
 const answer = 3;
  console.log(answer);

  console.log(question.get(question.get('correct') === answer));

  // Convert map to array
  console.log([...question]);
  // console.log(question.entries());
  console.log([...question.keys()]);
  console.log([...question.values()]);

  const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
  ]);

  // 1.
  const events = [...new Set(gameEvents.values())];
    console.log(events);
     
    // 2.
    gameEvents.delete(64,);

    // 3.
    console.log(
     `An event happened, on average, every ${90 / gameEvents.size} minutes` 
    );

    const time = [...gameEvents.keys()].pop();
    console.log(time);
    console.log(
      `An event happened, on average, every ${time / gameEvents.size} minutes`
    );

    // 4
    for (const [min, event] of gameEvents) {
      const half = min <= 45 ? 'FIRST' : 'SECOND';
      console.log(`[${half} HALF] ${min}: ${event}`);
    }
      
    
    // Working with strings
    const airline = 'TAP Air Portugal';
    const plane = 'A320';

    console.log(plane[0]);
    console.log(plane[1]);
    console.log(plane[2]);
    console.log('B737'[0]);

    console.log(airline.length);
    console.log('B737'.length);

    console.log(airline.indexOf('r'));
    console.log(airline.lastIndexOf('r'));
    console.log(airline.indexOf('Portugal'));

    console.log(airline.slice(4));
    console.log(airline.slice(4, 7))

    console.log(airline.slice(0, airline.indexOf(' ')));
    console.log(airline.slice(airline.lastIndexOf(' ') + 1));

    console.log(airline.slice(-2));
    console.log(airline.slice(1, -1));

    const checkMiddleSeat = function (seat) {
      // B and E are middle seats
      const s = seat.slice(-1);
      if (s === 'B' || s === 'E') console.log('You got the middle seat');
      else console.log('You got lucky');
    };

    checkMiddleSeat('11B');
    checkMiddleSeat('23C');
    checkMiddleSeat('3E');

    console.log(new String('jonas'));
    console.log(typeof new String('jonas'));

    console.log(typeof new String('jonas').slice());

    console.log(airline.toLowerCase());
    console.log(airline.toUpperCase());

    // Fix capitalization in name
    const passenger = 'jOnAS'; // Jonas
    const passengerLower = passenger.toLowerCase();
    const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
    console.log(passengerCorrect);

    // Comparing emails
    const email = 'hello@jonas.io';
    const loginEmail = '  Hello@Jonas.Io \n';

    // const lowerEmail = loginEmail.toLowerCase();
    // const trimmedEmail = lowerEmail.trim();
    const normalizedEmail = loginEmail.toLowerCase().trim();
    console.log(normalizedEmail);
    console.log(email === normalizedEmail);

    // Replacing
    const priceGB = '288,97%';
    const priceUS = priceGB.replace('%', '$').replace(',', '.');
    console.log(priceUS);

    const announcement = 
    'All passengers come to boarding door 23. Boarding door 23!';

    console.log(announcement.replace('door', 'gate'));

    console.log(announcement.replace(/door/g, 'gate'));

    // Boolean
    const plane1 = 'Airbus A320neo';
    console.log(plane.includes('A320'));
    console.log(plane.includes('Boeing'));
    console.log(plane.startsWith('Airb'));

    if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
      console.log('Part of the NEW ARirbus family');
    }

    // Practice exercise
    const checkBaggage = function (items) {
      const baggage = items.toLowerCase();
      if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed on board');
      } else {
        console.log('Welcome aboard!');
      }
    };

    checkBaggage('I have a laptop, some Food and a pocket knife');
    checkBaggage('Socks and camera');
    checkBaggage('Got some snacks and a gun for protection');

    
  //  const spt1 = 'a+very+nice+string';
  //  const spt = spt1.split('+');
  //  console.log(spt);

    // split and join
  console.log('a+very+nice+string'.split('+'));
    console.log('Jonas Schmedtmann'.split(' '));

    const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

    const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
    console.log(newName);

    const capitalizeName = function (name) {
      const names = name.split(' ');
      const namesUpper = [];

      for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
      }
      console.log(namesUpper.join(' '));
    };

    capitalizeName('jessica ann smith davis');
    capitalizeName('jonas schmedtmann');

    // Padding 
    const message = 'Go to gate 23!';
    console.log(message.padStart(20, '+').padEnd(30, '+'));
    console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

    const maskCreditCard = function (number) {
      const str = number + '';
      const last = str.slice(-4);
      return last.padStart(str.length, '*');
    };
    
    console.log(maskCreditCard(64637836));
   console.log(maskCreditCard(43378463864647384));
    console.log(maskCreditCard('334859493847755774747'));

    // Repeat
    const message2 = 'Bad weather... All Departures Delayed...';
    console.log(message2.repeat(5));

    const planesInline = function (n) {
      console.log(`There are ${n} planes in line ${'B'.repeat(n)}`);
    };
    planesInline(5);
    planesInline(3);
    planesInline(12);
    

    // Coding challenge
    document.body.append(document.createElement('textarea'));
    document.body.append(document.createElement('button'));
   
    document.querySelector('button').addEventListener('click', function () {
      const text = document.querySelector('textarea').value;
      const rows = text.split('/n');
      
      for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');

        const output = `${first}${second.replace(
          second[0],
          second[0].toUpperCase()
        )}`;
        console.log(`${output.padEnd(20)}${'%'.repeat(i + 1)}`);
      }
    });

    const bookings = [];

    const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
      // ES 5
      // numPassengers = numPassengers || 1;
      // price = price || 199;

      const booking = {
        flightNum,
        numPassengers,
        price,
      };
      console.log(booking);
      bookings.push(booking);
    };

    createBooking('LH123');
    createBooking('LH123', 2, 800);
    createBooking('LH123', 2);
    createBooking('LH123', 5);
    createBooking('LH123', undefined, 1000);

    const flight = 'LH234';
    const jonas = {
      name: 'Jonas Schmedtmann',
      passport: 24739479284,
    };

    const checkIn = function (flightNum, passenger) {
      flightNum = 'LH999';
      passenger.name = 'Mr. ' + passenger.name;

      if (passenger.passport === 24739479284) {
        alert('checked in');
      } else {
        alert('Wrong passport!');
      }
    };

    // checkIn(flight, jonas);
    // console.log(flight);
    // console.log(jonas);

    // Is the same as doing...
    // const flightNum = flight;
    // const passenger = jonas;

    const newPassport = function (person) {
      person.passport = Math.trunc(Math.random() * 100000000);
    };

    newPassport(jonas);
    checkIn(flight, jonas);

    const oneWord = function (str) {
      return str.replace(/ /g, '').toLowerCase();
    };

    const upperFirstWord = function (str) {
      const [first, ...others] = str.split('');
      return [first.toUpperCase(), ...others].join('');
    };

    // Higher-order function
    const transformer = function (str, fn) {
      console.log(`Original string: ${str}`);
      console.log(`Transformed string: ${fn(str)}`);

      console.log(`Transformed by: ${fn.name}`);
    };

    transformer('JavaScript is the best!', upperFirstWord);
    transformer('JavaScript is the best!', oneWord);

    // JS uses callbacks all the time
    const high5 = function () {
      console.log('B');
    };
    document.body.addEventListener('click', high5);
    ['Jonas', 'Martha', 'Adam'].forEach(high5);

    const greet = function (greeting) {
      return function (name) {
        console.log(`${greeting} ${name}`);
      };
    };

    const greeterHey = greet('Hey');
    greeterHey('Jonas');
    greeterHey('Steven');

    greet('Hello')('Jonas');

    // Challenge
    const greetArr = greeting => name => console.log(`${greeting} ${name}`);

    greetArr('Hi')('Jonas');
    

    const lufthansa = {
      airline: 'lufthansa',
      iataCode: 'LH',
      bookings: [],
      // book: function () {}
      book(flightNum, name) {
       console.log(
        `${name} booked a seat on ${this.airline} flight ${this.aitaCode}${flightNum}`
       );
       this.bookings.push({flight: `${this.aitaCode}${flightNum}`, name})
      },
    };

    lufthansa.book(239, 'Jonas Schmedtmann');
    lufthansa.book(635, 'John Smith');
    console.log(lufthansa);

    const eurowings = {
      name: 'Eurowings',
      iataCode: 'EW',
      bookings: [],
    }; 

    const book = lufthansa.book;

    // Does NOT work
    // book (23, 'Sarah Williams);

    // Call Method
    book.call(eurowings, 23, 'Sarah Williams');
    console.log(eurowings);

    book.call(lufthansa, 239, 'Mary Cooper');
    console.log(lufthansa);

    const swiss = {
      airline: 'Swiss Air Lines',
      iatacode: 'LX',
      bookings: [],
    };

    book.call(swiss, 583, 'Mary Cooper');
    console.log(swiss);

    // Apply Method
    const flightData = [583, 'George Cooper'];
    book.apply(swiss, flightData);
    console.log(swiss);

    book.call(swiss, ...flightData);

    const bookEW = book.bind(eurowings);
    const bookLH = book.bind(lufthansa);
    const bookLX = book.bind(swiss);

    bookEW(23, 'Steven Williams');

    const bookEW23 = book.bind(eurowings, 23);
    bookEW23('Jonas Schmedtmann');
    bookEW23('Martha Cooper');

    // With Event Listeners
    lufthansa.planes = 300;
    lufthansa.buyPlane = function () {
      console.log(this);

      this.planes++;
      console.log(this.planes);
    };
    // lufthansa.buyPlane();

    // document
    // .querySelector('.buy')
    // .addEventListener('click', lufthansa.buyPlane.bind
    //   (lufthansa));

    // Partial application
    const addTax = (rate, value) => value + value * rate;
    console.log(addTax(0.1, 200));

    const addVAT = addTax.bind(null, 0.23);
    // addVAT = value => value * 0.23;

    console.log(addVAT(100));
    console.log(addVAT(23));

    const addTaxRate = function (rate) {
      return function (value) {
        return value + value * rate;
      };
    };
    const addVAT2 = addTaxRate(0.23);
    console.log(addVAT2(100));
    console.log(addVAT2(23));
    

    const runOnce = function () {
      console.log('This will never run again');
    };
    runOnce();

    // IFFE
    (function() {
      console.log('This will never run again');
      const isPrivate = 23;
    })();

    //console.log(isPrivate);

    (() => console.log('This will ALSO never run again'))();

    {
      const isPrivate = 23;
      var notPrivate = 46;
    }
    //console.log(isPrivate);
    console.log(notPrivate);

    const secureBooking = function () {
      let passengerCount = 0;

      return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
      };
    };

    const booker = secureBooking();

    booker();
    booker();
    booker();
    

    // Example 1
    let f;

    const g = function () {
      const a = 23;
      f = function () {
        console.log(a * 2);
      };
    };

    const h = function () {
      const b = 777;
      f = function () {
        console.log(b * 2);
      };
    };

    g();
    f();
    console.dir(f);

    // Re-assigning f function
    h();
    f();
    console.dir(f);

    // Example 2
    const boardPassengers = function (n, wait) {
      const perGroup = n / 3;

      setTimeout(function () {
        console.log(`We are boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
      },wait * 1000 );

      console.log(`Will start boarding in ${wait} seconds`);
    };

    //const perGroup = 1000;

    boardPassengers(180, 3);
    

    (function () {
      const header = document.querySelector('h1');
      header.style.color = 'red';

      document.querySelector('body').addEventListener
      ('click', function () {
        header.style.color = 'blue';
      });
    })();
    */

    

    




















  






