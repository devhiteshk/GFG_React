let a = "hitesh"

const sum = (a: number | string, b:number): number =>{  // union type it can be string/number
    return a+b
}

// console.log(sum('2','3'))
console.log(sum(2,3))

let num: any;
num = "Hey"
num = false

let d: number

d = 5

d = "hello"

let e: unknown  // any allows operations on variables but unknown doesnt allow it, but both allow giving values to variables

e() =>{}

e = [1,2,3,5]

e.filter()      //because of unknows ts shows error "TS is so good"

let num2: number = "hey"

let num3: string = num

# UNION Type
# INTERSECTION TYPE


type numString = number | string

let a2: numString = 5

a2 = "HiTESH"

// NUMBER
// string
// boolean
// any
// unknown
// void
// null
// undefined

type OwnUser = {
    name: string;
    age: number;
}

let a3: OwnUser = {
    name:'hitesh',
    age: 'age'
}

type anotherUser = {
    address?: string
}

type CombinedUser = anotherUser & OwnUser

let userNew: CombinedUser{
    name:'hitesh'
}

userNew.age
userNew.address


