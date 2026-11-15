
// Task 1: Change button color
function changeColor() {

    let button = document.getElementById("colorBtn");

    button.style.backgroundColor = "green";

    button.innerHTML = "Color Changed!";
}

// Task 2: Show greeting according to current time
function showGreeting() {

    let hour = new Date().getHours();

    if (hour < 12) {
        alert("Good Morning!");
    }
    else if (hour < 17) {
        alert("Good Afternoon!");
    }
    else {
        alert("Good Evening!");
    }
}

// Task 3: Add two numbers
function addNumbers() {

    let number1 = Number(document.getElementById("num1").value);

    let number2 = Number(document.getElementById("num2").value);

    let sum = number1 + number2;

    document.getElementById("result").innerHTML =
        "The Sum is: " + sum;
}