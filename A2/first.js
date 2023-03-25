const form = document.querySelector('.form');
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const img = document.querySelector('.sad-emoji');
const video = document.createElement('video');
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-
9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zAZ]{2,}))$/;
function drawEmoji() {
ctx.drawImage(img, 10, 10, 100, 100);
ctx.fillText('WRONG PHONE NUMBER', 10, 140);
}
function clearCanvas() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
}
form.addEventListener(
'submit',
(e) => {
e.preventDefault();
const firstname = $('#firstname').val();
const lastname = $('#lastname').val();
const email = $('#email').val();
const phone = $('#phone').val();
const address = $('#address').val();
if (phone.length < 10) {
alert('ERROR : Phone number is invalid');
$('#phone').css('border', '1px solid red');
drawEmoji();
}else if(!re.test(email)){
 alert('ERROR: Email-id is invalid');
}
else {
 $('#phone').css('border', 'none');
 clearCanvas();
 console.log(firstname, lastname, email, phone, address);
 }
 },
 { capture: true }
 );
 $(document).ready(() => {
 const h1 = document.createElement('h1');
 const p = document.createElement('p');
 h1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
 p.textContent = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat';
 
$(h1).css({ textDecoration: 'underline', color: 'gold' });
 $(p)
 .css('color', 'violet')
 .css('padding', '10px')
 .css('background-color', '#DDD')
 .css('rotate', '4deg')
 .css('text-align','center');
 $(document.body).prepend(p);
 $(document.body).prepend(h1);
 $('.fadeHeader').click(() => {
 


