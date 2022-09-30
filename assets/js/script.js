
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav-mobile").style.width = "175px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav-mobile").style.width = "0";
    document.body.style.backgroundColor = "white";
  
  }

var password = document.getElementById("password"), confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;