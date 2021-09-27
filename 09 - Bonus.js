var min = 1;
var max = 6;
var random = Math.floor(Math.random() * (max - min + 1) + min)

if (random == 6) {
    console.log("Yes I win ! I rolled " + random)
} else {
    console.log("So close... I rolled " + random)
}