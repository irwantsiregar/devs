const btnSend = document.querySelector('.btn-send');
const btnLoading = document.querySelector('.btn-loading');
const alertSuccess = document.querySelector('.alert-success');
const galleryImage = document.querySelectorAll('.gallery-img');

function buttonComponent() {
  btnLoading.classList.toggle('d-none');// when the submit button is clicked
  btnSend.classList.toggle('d-none');// show the loading button, remove the send button or vice versa.
}

function alertComponent() {
  alertSuccess.classList.toggle('d-none');  // show alert.
}