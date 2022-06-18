//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93

let ages = [3,9,23,64,2,8,28,93];

//Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//(do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.

let first = ages[0];
let last = ages[ages.length -1];

console.log(last - first);

//Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

ages.push(10);

last = ages[ages.length - 1];

console.log(last - first);

//Use a loop to iterate through the array and calculate the average age. Print the result to the console.

let sum = 0;

for (let number of ages){
    sum += number;
}

average = sum / ages.length;

console.log(average);

//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ["Sammy","Tommy","Tim","Sally","Buck","Bob"];

//Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

for (let i=0; i < names.length; i++){
    console.log(names[i].length);
}

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

let result = " ";

for(let i=0; i < names.length; i++){
    result = result + " " + names[i];
}
console.log(result);

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths =[];

for(let i=0; i < names.length; i++){
    nameLengths.push(names[i].length);
}

console.log(nameLengths);

//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

let total = 0;

for(let i = 0; i < nameLengths.length; i++){
    total += nameLengths[i];
}
console.log(total);

//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 

function wordRepeat(word, n){
    return word.repeat(n);
}
console.log(wordRepeat("Hello",3));

//Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
//"Taylor Swift" used as example name to test code.

function fullName(firstName, lastName){
    return firstName + " " + lastName;
}
console.log(fullName("Taylor","Swift"));

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. 
//(1,2,3,4 have been placed into array as placeholders to practice running function)

let numberList = [1,2,3,4];
let sumOfNumbers = 100 <= numberList.reduce(function(accumulator,currentValue){
    return accumulator + currentValue;
});
console.log(sumOfNumbers);

//Write a function that takes an array of numbers and returns the average of all the elements in the array. (1,2,3,4 have been placed into array as placeholders to run function)

let numbersArray = [1,2,3,4];

function numbersAvg(numbersArray){
    let total = numbersArray.reduce((acc,c) => acc + c, 0);
    return total / numbersArray.length;
}
let totalAverage = numbersAvg(numbersArray);
console.log(totalAverage);

//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array 
//is greater than the average of the elements in the second array.

let arrayOne = [1,2,3,4];
let arrayTwo = [5,6,7,8];

function isItGreaterThan(arrayOne,arrayTwo){
    if((arrayOne.reduce((acc,c) => acc + c, 0)) > (arrayTwo.reduce((acc,c) => acc + c, 0))){
        return true;
    }else{
        return false;
    }
}
console.log(isItGreaterThan(arrayOne,arrayTwo));

//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if 
//it is hot outside and if moneyInPocket is greater than 10.50.

let isHotOutside = true
let moneyInPocket = 20

function willBuyDrink(isHotOutside,moneyInPocket){
    if(isHotOutside && moneyInPocket >= 10.50){
        return true;
    }else{
        return false;
    }
}
console.log(willBuyDrink(isHotOutside,moneyInPocket));

//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
//function will determine if the item is pink and then print to the console wether or not it is. 

let colorOfItem = "pink";

function isItemPink(colorOfItem){
    if(colorOfItem.toLowerCase() === "pink"){
        return "the item is pink.";
    }else{
        return "the item is not pink.";
    }
}
console.log(isItemPink(colorOfItem));