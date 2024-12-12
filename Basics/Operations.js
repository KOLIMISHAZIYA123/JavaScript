// let score="33abc"
let score=null

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber) //NaN 
//"33"=>33
//"33abc" => NaN
//true => 1;false => 0

let isLoggedIn="khan"
let booleanISLoggedIn=Boolean(isLoggedIn)
// console.log(booleanISLoggedIn)

let number=33
let stringNumber=String(number)
// console.log(stringNumber);
// console.log(typeof stringNumber)

//  operations
let value=3
let negValue=-value
// console.log(negValue)

//+,-,*,/,%

let str1;
let str2;
let str3=str1+str2

// cons 

//comparisions

// >,<,==,!=,<=,>=

// console.log(null > 0); //false
// console.log(null >= 0);//true
// console.log(null == 0);//false

// console.log(undefined == 0);//false
//The reason is that an equality check == and comparisions > <>= <= work differently.
//comparions convert null to a number treating it as 0 that's why null>= 0 is true and null > 0 is false. 

// console.log("2" === 2);
// console.log("2" == 2);