let str1 = "Hey"
let str2 = "this is full stack course"
let phrase = `${str1}, ${str2}`
console.log(phrase)

let check = 40 > 1
console.log(check) 

let x = null

let age
const y = 15    //we need to define const

// objects in JS

const user = {
    name: 'hitesh',
    age: 25,
    address: null,
    'likes chess': true
}

const uniqueKey = Symbol('store')
console.log(uniqueKey)
const generateKey = Symbol.for('hello')

// [Symbol.iterator]
for(let key in user){
    console.log(key, user[key])
}

// typeof operator

typeof undefined    //undefined
typeof 0            //number
typeof 10n          //bigint
typeof true         //boolean
typeof "foo"        //string
typeof Symbol('id') //symbol
typeof Math         //object
typeof null         //object
typeof alert        //function

//https:caniuse.com check code compatibility

const array = ['hello', 25]

for(let i=0; i<array.length;i++){

}

array.forEach(val =>{
// new way for defining function ES6 2015
})

array.forEach(function(arg){
// old way to define function ES5 2009
})

array.map(val =>{

})

// ...array -> spread operator

console.log(user.address)
console.log(user['likes chess'])  // if id is a string with spaces we should use square brackets

let Name = 'hitesh'
let fullName = {
    [Name + 'kumar']: 25
}
console.log(" ")
console.log("age" in user)   // returns true if "age" exists in user object

function myUser(){
    return `Hello ${this.last}`
}

const u1 = myUser.call()
const u2 = myUser.bind()
const u3 = myUser.apply({last:"World"})
console.log(u3)

const u4 = {
    name: `shreynik`,
    getFullName: function(){
        return this.likes
    } 
}

const test ={
    likes: 'badminton'
}

const fnRef = u4.getFullName

console.log(fnRef())

test.myFunc = fnRef

console.log(test.myFunc())

// Week 1 day 2

let animal = {
    eats: 'carrot'
}

let rabbit = {
    jumps: 'on tree'
}

Object.setPrototypeOf(rabbit,animal)

console.log(rabbit.eats)

const a = [1,2,3,4,5,6]

console.log(a.slice(1))

Array.prototype.myFunc = function(){
    console.log('hitesh')
}

class User {
    constructor(name){
        this.name = name
    }           // constructor

    SayHi(){
        console.log(this.name)
    }           // method cant use arrow function for method in a class
}

let user01 = new User("John")
user01.SayHi()

class Button{
    constructor(value){
        this.value = value
    }
    click = () =>{
        console.log(this.value)
    }
}
 
let button = new Button("hello")

setTimeout(button.click, 1000)

function makeCounter(){
    let count = 0;
    return function(){
        return count++
    }
}

let counter = makeCounter()

console.log(counter())
console.log(counter())
console.log(counter())


let promise = new Promise(function(res,rej){
    setTimeout(()=> res("done"),1000)
})

console.log(promise)

promise.then(
    result => console.log(result),
    error => console.log(error)
)

promise
    .then(res=> console.log(res))
    .catch(res=> console.log(err))
    .finally(()=> console.log('Do something'))

