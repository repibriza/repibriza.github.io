firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if (user != null) {
      // User is signed in.
      var email_id = user.email_id;
      document.getElementById("user_para").innerHTML = "Bem-vindo " + email_id + "." +
       "<br>Você está no login do sistema de telemedicina."+
       "<br>Atualmente logado."
    }
    document.getElementById("email_field").value = "";
    document.getElementById("password_field").value = "";
  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.getElementById("email_field").value = "";
    document.getElementById("password_field").value = "";
  }
});

function login(){
  //window.alert("Login Called.")
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorCode + "\n" + errorMessage);
    // ...
  });
}

function loggout(){
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
    // var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorCode + "\n" + errorMessage);
  });
}
