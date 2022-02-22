document.getElementById('firstname').addEventListener('blur', validateFirstName);
document.getElementById('lastname').addEventListener('blur', validateLastName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('password').addEventListener('blur', validatePassword);


function validateFirstName(){
  const firstName = document.getElementById('firstname');
  const errorMsg = document.getElementById('em-1');
  const errorIcon = document.getElementById('ei-1');
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(firstName.value)){
   errorMsg.style.opacity = 1;
   errorIcon.style.opacity = 1;
  }else {
    errorMsg.style.opacity = 0;
    errorIcon.style.opacity = 0;
  }

}

function validateLastName(){
  const lastName = document.getElementById('lastname');
  const errorMsg = document.getElementById('em-2');
  const errorIcon = document.getElementById('ei-2');
  const re = /^[a-zA-Z]{2,12}$/;

  if(!re.test(lastName.value)){
    errorMsg.style.opacity = 1;
   errorIcon.style.opacity = 1;
    
  }else {
    errorMsg.style.opacity = 0;
    errorIcon.style.opacity = 0
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const errorMsg = document.getElementById('em-3');
  const errorIcon = document.getElementById('ei-3');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)){
    errorMsg.style.opacity = 1;
   errorIcon.style.opacity = 1;

  }else{
    errorMsg.style.opacity = 0;
    errorIcon.style.opacity = 0
  }
}

function validatePassword(){
  const password = document.getElementById('password');
  const errorMsg = document.getElementById('em-4');
  const errorIcon = document.getElementById('ei-4');
  const re = /^[a-zA-Z0-9_\-\.]/

  if(!re.test(password.value)){
    errorMsg.style.opacity = 1;
   errorIcon.style.opacity = 1;
  }else {
    errorMsg.style.opacity = 0;
    errorIcon.style.opacity = 0
  }
}