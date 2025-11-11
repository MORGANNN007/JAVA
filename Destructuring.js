// Arrays destructuring ;

const nums = [1,2,3,4];

const [,num1, , num2]=nums;

console.log(num1)
console.log(num2)

// String DESTRUCTURINNG ;

const name = 'Yash Ingole';

const [firstname , lastname ] = name.split(' ')

console.log(firstname);
console.log(lastname);

// now another example ; 

const char = 'abc';

const [chari1 , chari2 , chari3] = char;

console.log(chari1);
console.log(chari2);
console.log(chari3);

// swapping of elemnnts ;

let firstNam = "dada";
let lastnam = "bhaiya";

[firstNam , lastnam] = [lastnam , firstNam]

console.log(firstNam)
console.log(lastnam)

//  OBJECT DESTRUCTURING ; 

// This is known as concept of  aliasing 


 let firstnamee = "vada";

const obj = {
    firstnamee :"yash",
    lastnamee:"Ingole"

};

const {firstnamee:fn,middlename="none" ,  lastnamee} = obj ; 

console.log(fn,middlename, lastnamee)


// Example 

let options = {
    size :{
        width:100,
        hieght:200,
    },
    items : ["cake" ,"donut"],
    extra : true 
};

const { size :{width:w} , 
        items :[ ,item2] , 

} = options ;

console.log(w,item2)

// object mapping 

function nameeeee ({fn,ln})
{
    console.log(`${fn} ${ln}`)
};

nameeeee({
    ln:"doe",
    fn:"john",
})

// Interview questions no - 1 

const person =
{
    names : "john",
    address:{
        city:"New york",
        country:"USA",
    }
};

const { names , address } = person;
const {city , country} = address ;

console.log(`${name} lives in ${city} , ${country}`)

// Interview question - 2 

const company = {
    namem :"TechCo",
    CEO:{
        name:"John CEO",
        age:45,
        address:{
            cityi:"silicon valley",
            country:"USA"
        }
    },
};

const {namem , age  } = company ;
const {cityi} = address; 

console.log(namem) 
console.log(age) 
console.log(cityi) 