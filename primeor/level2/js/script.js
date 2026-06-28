document.addEventListener("DOMContentLoaded", function () {

    // Welcome message
    console.log("Responsive Company Website Loaded Successfully!");

    // Hero button functionality
    const heroButton = document.querySelector(".hero .btn");

    heroButton.addEventListener("click", function () {

        document.querySelector("#services").scrollIntoView({
            behavior: "smooth"
        });

    });

    // Learn More buttons
    const learnButtons = document.querySelectorAll(".card .btn");

    learnButtons.forEach(function(button){

        button.addEventListener("click", function(event){

            event.preventDefault();

            alert("Thank you for your interest! More details will be available soon.");

        });

    });

    // Contact form submission
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event){

        event.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const message = form.querySelector("textarea").value.trim();

        if(name === "" || email === "" || message === ""){

            alert("Please fill all the fields.");

            return;

        }

        alert("Thank you, " + name + "! Your message has been submitted successfully.");

        form.reset();

    });

});