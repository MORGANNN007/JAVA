const nums = [1,2,3,4,5]
const nums2 = [9,10,11,12]

const newNum = [...nums,6,7,8,...nums2];
// concat is also possible.


console.log(newNum)

// to spread.

const sum = (a,b,c)=>{
    console.log(a+b+c)
};

sum(...nums2)

// To split the strings

const str = 'abc';

const chars = [...str]

console.log(chars)

// combining of two objects

let obj1 ={
    name:"Yash",
    roll_no:3228,
};

let obj2 = {
    class:3,
    year:"3rd year"
}

const obj = {...obj1 , ...obj2}

console.log(obj)

// Interview question no  1 

const array1 = [1,2,3,4];

const array2 = [5,6,7,8];

const arrays = [...array1 , ...array2]

console.log(arrays)

// Interview question no - 2 

let getFirstTwo = ([first, second,...rest])=>
{
    return[first,second]
};

console.log(getFirstTwo([1,2,3,4]))