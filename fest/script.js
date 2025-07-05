/*// Countdown Timer
const festDate = new Date("April 9, 2025 00:00:00").getTime();
const timerInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = festDate - now;
    
    if (distance < 0) {
        document.getElementById("timer").innerHTML = "The fest is live!";
        clearInterval(timerInterval);
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the countdown in the format: XXd XXh XXm XXs
        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s remaining`;
    }
}, 1000);

// Registration Form Submission
document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("registrationMessage").innerText = "You have been registered successfully!";
});

// Chatbot Toggle
document.getElementById("chatbot-btn").addEventListener("click", function() {
    const chatbox = document.getElementById("chatbox");
    chatbox.style.display = chatbox.style.display === "none" ? "block" : "none";
});

// Go to Home Page Function
function goToHomePage() {
    // Change the URL to your homepage URL
    window.location.href = 'index.html'; // or '/' if it's your root home page
}*/

/*// Countdown Timer
const festDate = new Date("April 9, 2025 00:00:00").getTime();
const timerInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = festDate - now;
    
    if (distance < 0) {
        document.getElementById("timer").innerHTML = "The fest has ended.";
        clearInterval(timerInterval);
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the countdown in the format: XXd XXh XXm XXs
        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s remaining`;
    }
}, 1000);

// Registration Form Submission
const registrationForm = document.getElementById("registrationForm");
if (registrationForm) {
    registrationForm.addEventListener("submit", function(e) {
        e.preventDefault();
        document.getElementById("registrationMessage").innerText = "You have been registered successfully!";
    });
}

// Chatbot Toggle
const chatbotBtn = document.getElementById("chatbot-btn");
if (chatbotBtn) {
    chatbotBtn.addEventListener("click", function() {
        const chatbox = document.getElementById("chatbox");
        chatbox.style.display = chatbox.style.display === "none" ? "block" : "none";
    });
}

// Go to Home Page Function
function goToHomePage() {
    // Change the URL to your homepage URL
    window.location.href = 'index.html'; // or '/' if it's your root home page
}*/

// Countdown Timer
const festDate = new Date("April 9, 2025 00:00:00").getTime();
const timerInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = festDate - now;

    if (distance < 0) {
        document.getElementById("timer").innerHTML = "The fest has ended.";
        clearInterval(timerInterval);
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s remaining`;
    }
}, 1000);

// Intercept registration clicks based on date
document.addEventListener("DOMContentLoaded", () => {
    const festDeadline = new Date("April 9, 2025 00:00:00").getTime();
    const now = new Date().getTime();

    // If the current time is after April 9, prevent form access
    if (now >= festDeadline) {
        const registerButtons = document.querySelectorAll('a.btn');
        registerButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                alert("Registrations are closed.");
            });
        });
    }
});

// Registration Form Submission (if present)
const registrationForm = document.getElementById("registrationForm");
if (registrationForm) {
    registrationForm.addEventListener("submit", function(e) {
        e.preventDefault();
        document.getElementById("registrationMessage").innerText = "You have been registered successfully!";
    });
}

// Chatbot Toggle (if present)
const chatbotBtn = document.getElementById("chatbot-btn");
if (chatbotBtn) {
    chatbotBtn.addEventListener("click", function () {
        const chatbox = document.getElementById("chatbox");
        chatbox.style.display = chatbox.style.display === "none" ? "block" : "none";
    });
}

// Go to Home Page Function
function goToHomePage() {
    window.location.href = 'index.html';
}
