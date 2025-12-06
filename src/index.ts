// const str = "Hello World";
// const reveresedStr = str.split("").reverse().join("");
// console.log(reveresedStr);

// const newArray = str.split("")
// console.log(newArray)

// const trimed = "       Hello".trim()
// console.log(trimed)

// console.log("fahad".includes(" "))
// console.log("fahad".concat(" Bin Javed"))

// let arr = [1,2,3]
// arr.push(4)
// console.log(arr)

const reverseString = (str: string) => {
  const reverse = str.split("").reverse().join("");
  return reverse;
};
console.log(reverseString("My name is Fahad"));

const studensts = [
  {
    id: 1,
    name: "Fahad",
    submitted_paper: false,
  },
  {
    id: 2,
    name: "ALi",
    submitted_paper: true,
  },
];

let obj1 = {
  name: "Ali",
  age: 14,
};

const obj2 = obj1; //copy by Referance
obj2.age = 56;

const obj3 = { ...obj1 }; //copy by value

obj3.age = 100;

console.log(obj1);
console.log(obj2);
console.log(obj3);

const person1 = {
  name: "Fahad",
  age: 10,
  address: {
    city: "Lahore",
    country: "Pakistan",
  },
};

const person2 = { ...person1 };

console.log(person1);
console.log(person2);

person2.address.country = "Afghansitan";
person2.age = 100;

console.log(person1);
console.log(person2);
