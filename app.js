var numberChange = document.getElementsByClassName("number");
numberChange[0].innerHTML= "Hello Myanmar";

var numbers = [1,2,3,4,5,6,7,8,9,10];
var oddNumber = numbers.filter(function(n){
    return(n % 2 != 0);
});

console.log(oddNumber);

var evenNumber = numbers.filter(function(n){
    return(n % 2 == 0);
})

console.log(evenNumber);