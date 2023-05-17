// Life without loops is unconditionally tedious

/*
console.log(0);
console.log(1);
console.log(2);
console.log(3);

console.log("====================");
 
for (let i=0; i<=15; i++) {
    console.log(i);
}*/

// Loops must have:
// Initialiser or Starter or starting point
// Condition for when your loop should end
// Incrementor or decrementor || continues up or down

//for (/*loop start - with variable*/let i=0;/*loop condition for loop continuity*/i<=100;/*incrementor - adds one for loop duration*/i++) {
//   console.log(i);
//}

/*
i += 1;

i = i + 1; // i = 0 + 1 // i = 1
i = i + 1; // i = 1 + 1 // 1 = 2
i = i + 1; // i = 2 + 1 // 1 = 3
i = i + 1; // i = 3 + 1 // 1 = 4
i = i + 1; // i = 4 + 1 // 1 = 5

for (i=0; i<=99; i+=3) {
    console.log(i);
}

let total = 0;
for (let num = 1; num < 100; num++) {
    console.log(num);
    total += num;
}

console.log("The total is: " + total);

let fruits = ["mango", "banana", "apple", "cherry", "orange", "tomato"];

for (let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}*/

let data = {
    name: "john",
    age: 28,
    maritalStatus: true
}

// elem = data, name, age / data[elem] = elem: ... / elems are strings
for (let elem in data) {
    console.log(elem, data[elem]);
}

console.log(data);
console.log("I am anything: ", data.age);
// refer map, filter etc to get specific returns