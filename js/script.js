const scriptURL = 'https://script.google.com/macros/s/AKfycbxoq8YuyWiHbvDfh3k82Q5oThvGkOC1njtfI0o8TvyUOZh5UEvMxYHH47rl8LxqJu5v/exec'
const form = document.forms['submit-to-google-sheet'];

const btnSend = document.querySelector('.btn-send');
const btnLoading = document.querySelector('.btn-loading');
const alertSuccess = document.querySelector('.alert-success');

function buttonComponent() {
  btnLoading.classList.toggle('d-none');// when the submit button is clicked
  btnSend.classList.toggle('d-none');// show the loading button, remove the send button or vice versa.
}

function alertComponent() {
  alertSuccess.classList.toggle('d-none');  // show alert.
}

form.addEventListener('submit', e => {
  e.preventDefault();
  buttonComponent();

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      buttonComponent();
      alertComponent();
      form.reset();
      console.log('successful sending message!', response);
    })
    .catch(error => console.error('Error!', error.message))
})