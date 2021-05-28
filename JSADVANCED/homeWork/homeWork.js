// EX1
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
};
let x = prompt("x?", ''),
    n = prompt("n?", '');
if (n <= 0) {
    alert(
        `Power ${n} is not supported, please enter an integer number greater than zero`
    );
} else {
    alert(pow(x, n));
};

//EX2
const human = {
    name: "student",
    age: 17,
    address: "Bangkok Thailand",
    status: true,
    intelligence: 10
};

//EX3
//3.1
const object = {};
while (true) {
    let key = prompt("Enter key");
    if (key === 'stop') {
        break;
    }
    let value = prompt("Enter value");
    if (value === 'stop') {
        break;
    }
    object[key] = value;
};
console.log(object);

//3.2
const object = {};
while (true) {
    let key = prompt("Enter fruit");
    if (key === 'stop') {
        break;
    }
    let value = +prompt("Enter value");
    if (value === 'stop') {
        break;
    }

    if (value > 1) {
        key += "s"
        object[key] = value;
    } else {
        object[key] = value;
    }

};
console.log(object);

//EX4
//4.1
const obj = {};
obj.name = "Sonter";
obj.sername = "Pakorn";
obj.name = "Boy";
delete obj.name;
console.log(obj);

//4.2
const user = {}
const isEmpty = (obj) => {
    for (let key in obj) {
        if (key) {
            return false;
        }
    }
    return true
};
console.log(isEmpty(user));

//4.3
const user = {
    name: "John"
};

// does it work?
user.name = "Pete";// ไม่ Error

//4.4
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const sum = () => {
    let res = 0;
    for (let key in salaries) {
        res += salaries[key];
    }
    return res;
}

console.log(sum());

//4.5
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

const multiplyNumeric = (obj, times) => {
    for (let key in obj) {
        if (+obj[key]) {
            obj[key] = obj[key] * times;
        } else {
            obj[key] = obj[key];
        }
    }
}

multiplyNumeric(menu, 2);
console.log(menu);

//EX5
//5.1
let user = {
    name: "John",
    go: function () { alert(this.name) }
}

user.go() //๋John

//5.2
function makeUser() {
    return {
        name: "John",
        ref: this
    };
};

let user = makeUser();

alert(user.ref.name);// '' 

//5.3
let calculator = {
    read() {
        this.value1 = prompt("Enter value1")
        this.value2 = prompt("Enter value2")
    },
    sum() {
        return +this.value1 + +this.value2;
    },
    mul() {
        return this.value1 * this.value2;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//5.4
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep: function () {
        alert(this.step);
    }
};
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();
ladder.up().up().down().showStep();

//EX6
//6.1
function Calculator() {
    this.read = function () {
        this.value1 = prompt("Enter value1")
        this.value2 = prompt("Enter value2")
    },
        this.sum = function () {
            return +this.value1 + +this.value2;
        },
        this.mul = function () {
            return this.value1 * this.value2;
        }
};

let cal = new Calculator();
cal.read();
console.log(cal.sum());
console.log(cal.mul());

//6.2
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt("Enter value");
    }
};

let acc = new Accumulator(0);

acc.read();
console.log(acc.value);

//EX7
const random = (min, max) => {
    return min + Math.random() * (max - min);
}

console.log(random(1, 5));

//EX8
//8.1
function ucFirst(string) {
    if (typeof string !== "string") return "Require input string"
    if (!string) {
        return string;
    }
    let c = string[0].toUpperCase() + string.slice(1);
    return c;
}
console.log(ucFirst("hello"));

//8.2
function checkSpam(str) {
    if (typeof (str) !== "string") return "Require input string"
    str = str.toLowerCase();
    return str.includes("xxx") || str.includes("viagra");
}

console.log(checkSpam("Viagra"));

//8.3
function truncate(str, maxlength) {
    if (typeof (str) !== "string") return "Require input string"
    if (str.length >= maxlength) {
        return str + "...";
    } else {
        return str;
    }
}
console.log(truncate("What I'd like to tell on this topic is:", 20));

//8.4
function extractCurrencyValue(string, rate) {
    let mony = +string.slice(1);
    let baht = mony * rate;
    return baht;
}

console.log(extractCurrencyValue('$120', 30.5));
console.log(extractCurrencyValue('$120', 30.5) === 3660);

//EX9
//9.1
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

alert(fruits.length); // 4

//9.2
const styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[1] = "Classics"
styles.shift();
styles.unshift("Rap", "Reggae");
console.log(styles);

//9.3
function sumInput() {
    const Sums = [];
    while (true) {
        let input = +prompt("Enter number");
        if (!input && input !== 0) {
            break;
        } else {
            Sums.push(input);
        }
    }
    let summary = 0;
    Sums.forEach((value) => {
        summary += value;
    });
    console.log(summary);
}

sumInput();

//EX10
//1
let array1 = [1, 2, 30, 400];
let array2 = array1.map(value => value * 2);
console.log(array2);
//2
let array1 = [1, 2, 3, 4];
let array2 = array1.map(value => value.toString());
console.log(array2);

//3
let array1 = [1, "1", 2, {}];
let array2 = array1.map(value => typeof value);
console.log(array2);
//4
let array1 = ["apple", "banana", "orange"];
let array2 = array1.map(value => value.toUpperCase());
console.log(array2);
//5
let array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
]
let array2 = array1.map(value => value.name);
console.log(array2);
//6
let array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
]
let array2 = array1.map(value => value.age);
console.log(array2);
//7
let array1 = [
    { name: "apple", surname: "London" },
    { name: "banana", surname: "Bangkok" },
    { name: "watermelon", surname: "Singapore" },
]
let array2 = array1.map(value => value.name + " " + value.surname);
console.log(array2);
//8
let array1 = [1, 3, 4, 5, 6, 7, 8];
let array2 = array1.map(value => {
    if (value % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
});
console.log(array2);
//9
let array1 = [1, -3, 2, 8, -4, 5];
let array2 = array1.map(value => Math.abs(value))
console.log(array2);
//10
let array1 = [100, 200.25, 300.84, 400.3]
let array2 = array1.map(value => value.toFixed(2));
console.log(array2);
//11
let array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-01" },
    { name: "watermelon", birth: "1985-12-01" },
]
let array2 = array1.map((value) => {
    const birth = new Date(value.birth);
    const now = new Date();
    let age;
    if (now.getMonth() < birth.getMonth()) {
        age = (now.getFullYear() - birth.getFullYear()) - 1;
    } else if (now.getMonth() > birth.getMonth()) {
        age = (now.getFullYear() - birth.getFullYear());
    } else {
        if (now.getDate() < birth.getDate()) {
            age = (now.getFullYear() - birth.getFullYear()) - 1;
        } else {
            age = (now.getFullYear() - birth.getFullYear());
        }
    }
    return {
        ...value,
        age //age : age
    }
});
console.log(array2);

//12
let array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
]

let array2 = array1.map((value) => {
    const birth = new Date(value.birth);

    return `<tr>
  <td>${value['name']}</td> 
  <td>${birth.getDate()} ${birth.toLocaleString("default", { month: "short" }).toLowerCase()} ${birth.getFullYear()}</td>
 </tr>`
})
console.log(array2);

//13
let array1 = [1, 2, 30, 400];
let array2 = array1.filter(value => value > 10);
console.log(array2);

//14
let array1 = [1, 2, 3, 4];
let array2 = array1.filter(value => {
    if (value % 2 !== 0) {
        return value;
    }
});
console.log(array2);
//15
let array1 = [1, "1", 2, {}];
let array2 = array1.filter(value => {
    if (typeof value === "number") {
        return value;
    }
})
console.log(array2);

//16
let array1 = ["apple", "banana", "orange", "pineapple", "watermeon"];
let array2 = array1.filter(value => {
    if (value.length > 6) {
        return value;
    }
})
console.log(array2);

//17
let array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
];
let array2 = array1.filter(value => value.age < 18)
console.log(array2);

//18
let array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
]
let array2 = array1.filter(value => value.age !== 32)
console.log(array2);

//19
let array1 = [1, -3, 2, 8, -4, 5];
let array2 = array1.filter(value => value > 0);
console.log(array2);

//20
let array1 = [1, 3, 4, 5, 6, 7, 8];
let array2 = array1.filter(value => value % 3 === 0);
console.log(array2);

//21
let array1 = ["peach", 1, -3, "2", {}, []];
let array2 = array1.filter(value => typeof value === "string");
console.log(array2);
//22
let array1 = ["APPLE", "appLE", "PEACH", "PEach"];
let array2 = array1.filter(value => value === value.toUpperCase());
console.log(array2);
//23
let array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
]
let array2 = array1.filter(value => {
    let birth1 = value.birth.split("-")
    if (birth1[1] == 10) {
        return value;
    }
})
console.log(array2);

//24
let array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
]
let array2 = array1.filter(value => {
    let birth1 = value.birth.split("-");
    if (birth1[0] < 2000) {
        return value;
    }
})
console.log(array2);

//EX11
//11.1
function unique(arr) {
    let uni = new Set();
    let useValues = [];
    arr.forEach(value => {
        uni.add(value);
    });

    uni.forEach(values => {
        useValues.push(values);
    });
    return useValues;
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
console.log(unique(values))

//11.2
let map = new Map();

map.set("name", "John");

let keys = map.keys();

keys = Array.from(keys);

keys.push("more");

console.log(keys);


//EX12
//12.1
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
let sumSala = Object.values(salaries);
let sumSalaries = sumSala.reduce((acc, value) => acc + value, 0);
console.log(sumSalaries);

//12.2
let user = {
    name: 'John',
    age: 30
};

function count(obj) {
    return Object.keys(obj).length;
}
console.log(count(user));