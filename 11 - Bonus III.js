var roundedNumber = 2355.153
var mathceil = Math.ceil(roundedNumber) //4
var mathfloor = Math.floor(roundedNumber) //3
var result = mathceil - roundedNumber // 0.4

if (result <= 0.5) {
    console.log(mathceil)    
} else {
    console.log(mathfloor)
}