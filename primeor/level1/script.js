const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", () => {

    const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);

    colorBtn.style.backgroundColor = randomColor;
});

function showGreeting() {

    const hour = new Date().getHours();

    let message;

    if(hour < 12){
        message = "Good Morning";
    }
    else if(hour < 18){
        message = "Good Afternoon";
    }
    else{
        message = "Good Evening";
    }

    alert(message);
}

function addNumbers(){

    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    if(num1 === "" || num2 === ""){
        document.getElementById("result").innerHTML =
        "Please enter both numbers.";
        return;
    }

    const sum = Number(num1) + Number(num2);

    document.getElementById("result").innerHTML =
    "Result: " + sum;
}