function howdy(FirstName){
    alert("Howdy " + FirstName);
}
function conditional(){
    alert("Use Inspect to see the console and inspect the code.");
    var currentHour = new Date().getHours();
    if (currentHour <10) {
        alert("Good morning!");
    } else if (currentHour < 18) {
        alert("Good day!");
    } else {
        alert ("Good evening!");
    } 
}
for (i = 0; i < 5; i++) {
    console.log("The number is " + i);
}
function evalNumber(){
    var inputValue = Number(prompt("Enter my five-digit number without commas"))

    if (inputValue % 2 == 0) {
        alert(inputValue + "is an even number.")
    } else {
        alert(inputValue + " is an odd number.")
    }
}