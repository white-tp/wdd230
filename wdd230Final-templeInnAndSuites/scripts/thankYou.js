const feedbackElement = document.getElementById('feedback');
const formElement = document.forms[0];
formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    feedbackElement.innerHTML = `Hello ${formElement.name.value}! Thank you for your question. We will get back to you with an answer shortly!`;
    feedbackElement.style.display = "block";
    document.body.classList.toggle('moveDown');
});