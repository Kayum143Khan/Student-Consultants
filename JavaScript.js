// Form validation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (e) {
        const name = form.querySelector("input[name='name']");
        const email = form.querySelector("input[name='email']");
        const message = form.querySelector("textarea[name='message']");

        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            e.preventDefault(); // Stop form from submitting
            alert("Please fill in all fields.");
        } else if (!validateEmail(email.value)) {
            e.preventDefault();
            alert("Please enter a valid email address.");
        }
    });

    function validateEmail(email) {
        const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
