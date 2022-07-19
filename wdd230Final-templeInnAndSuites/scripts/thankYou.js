const feedbackElement = document.getElementById('feedback');
const formElement = document.forms[0];
formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    feedbackElement.innerHTML = `Hello ${formElement.fname.value}! Thank you for your reservation. We hope you have a wonderful stay with us!`;
    feedbackElement.style.display = "block";
    document.body.classList.toggle('moveDown');
});