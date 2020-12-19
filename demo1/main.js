//data type
let i = "10";
let isEqual = i == 10;//only the value
let isEqual0 = i ===10;//also the type
console.log(isEqual,isEqual0);

//variable
let candidate = "ashley"
const mySchool = 'UChicago'

//class
let student = {
    name:'john',
    age:10
};

//array
const toDos = [
    {
        morning : "make breakfast",
        noon : "meet the boss",
        isComplete : false
    },
    {
        morning : "take out trash",
        noon : "do pset",
        isComplete : false
    }
]
console.log(toDos[1].morning);

let selection = 'name';
let classA = ['alex','bob','johnson','peter'];
classA[2] = 'tim';

//console
console.log("call " + candidate + " to " + mySchool);
console.log(student.age, student.name);
console.log(student[selection]);
console.log(classA);
student.hobby = "swimming";
console.log(student.hobby)

//for
for(let i = 1; i < (toDos.length + 4); i++){
  console.log("for loop number:" + i);
}

for(let todo of toDos){
    console.log(todo.hobby);
}

//array method
//forEach，map,filter
//creating a new array
toDos.forEach(function(todo){
    console.log("forEach: " + todo.morning);
});

const toDosNoon = toDos.map (function(todo){
    return todo.noon;
});
console.log("todo noons:" + toDosNoon);

const inProgress = toDos.filter(function(todo){
    return todo.isComplete === false;
})
console.log(inProgress);

const inProgressNoon = toDos.filter(function(todo){
    return todo.isComplete === false;
}).map(function(todo){
    return todo.noon;
})
console.log(inProgressNoon);

//while
let k = 0;
while(k < 5){
    console.log("while loop number:" + i);
    k++;
}

//conditional
let x = 10;
if (x == 20){
    console.log("x is 20");
}else if(x > 20){
    console.log("x is greater than 20");
}else {
    console.log("x is less than 20");
}

let y = 30
if (x == 20 || y == 30){
    console.log("x equals 20 or y equals 30");
}else if(x == 10 && y == 30){
    console.log("x is 10 and y is 30");//order matters
}

//ternary operator 
const color = x > 5? "red" : "blue"
// ? is the ternart operator
console.log(color);

//swich
switch (color) {
    case "red":
        console.log("is red");
        break;
    case "blue":
        console.log("is blue");
        break;
    default:
        console.log("is neither red nor blue");
        break;
}


//function
function showClass(className, weather){
    console.log("here come " + className + " on such a "+ weather +" day!" )
}
console.log(showClass(classA,"sunny"));

function greet()
{
    let name =document.querySelector('#name').value;
    alert("hi,"+ name);
}

function add(num1 = 1, num2 = 2){
    console.log(num1 + num2);
}
add(); //adding up default values
add(3,7);//override

function add0(num1, num2){
    return num1 + num2;
}
console.log(add0(2,5));

//arrow function
const deduce = (num1 = 10,num2 = 5) => num1 - num2;
console.log(deduce);
console.log(deduce());
const deduce0 = num1 => num1 - 5;
console.log(deduce0(2));

toDos.forEach((todo) => console.log(todo));

//object oriented programming
//constructor function
 function person(firstName,lastName,dob){
     this.firstName = firstName;
     this.lastName = lastName;
     this.dob = new Date(dob);

     this.getBirthYear = function(){
         return this.dob.getFullYear();
     } 
 }

 //instantiate object
 const yuehan = new person("Yuehan","Wang","2001-11-30")
 console.log(yuehan.dob);
 console.log(yuehan.getBirthYear());

 //class
 class family{
     constructor(dad, mom, address){
         this.dad = dad;
         this.mom = mom;
         this.address = address;
     }

     whoIsDad(){
         return this.dad;
     }
 }

 //dom

 //select single element
 console.log(document.getElementById("name"))
 console.log(document.querySelector(".formSection"))
 const singleItem = document.querySelector(".listedItem")
 console.log(singleItem);

 //select multi element
 console.log(document.querySelectorAll(".listedItem"))
 const items = document.querySelectorAll(".listedItem")
items.forEach((item)=>console.log(item));

//add element
//create new element
const body = document.body;
body.append("this is append")
//can append everything, more than 1 thing at a time
const div = document.createElement("div")
body.appendChild(div)
div.innerText = "this is the created div appended using apeendChild"
div.innerHTML = "<strong>make the text bold</strong>"

const strong = document.createElement("strong")
strong.innerText = " this is strong"
div.append(strong)
//can only append elements, 1 thing at a time

//attribute
const title = document.getElementsByClassName("title")
title.id = "testing";

//remove element
const removeTest = document.getElementById("#testing")
removeTest.remove();

const text = document.querySelector(".title");
const changeColor = document.querySelector(".colorChangeBtn");

text.style.color = "red";
text.style.backgroundColor = "blue";

//create classes
text.classList.add("change");//classList find all the classes the text is at

//event listener
changeColor.addEventListener("click",function(){
   text.classList.toggle("change")
})//only function when clicked (call-back funtion)