
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

window.onload = ()=>{
    checkStatus();
}

const firebaseConfig = {
    apiKey: "AIzaSyBiPF5n9mHr6X1F9r27Q7YVgy6nHgdZqRQ",
    authDomain: "ansproject-6b54d.firebaseapp.com",
    databaseURL: "https://ansproject-6b54d-default-rtdb.firebaseio.com",
    projectId: "ansproject-6b54d",
    storageBucket: "ansproject-6b54d.appspot.com",
    messagingSenderId: "400128311162",
    appId: "1:400128311162:web:23183a68947d82bfcc60c3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getDatabase();

  var rreg = document.querySelector('.loginBtn.reg');
  if(rreg){
    rreg.addEventListener('click', register);
  }
  var llgin = document.querySelector('.loginBtn.log');
  if(llgin){
    llgin.addEventListener('click', login)
  }


  function checkStatus() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          
        } else {
            
        }
      });
  }

  
  function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const full_name = document.getElementById('name').value;

    if(validate_email(email) == false || validate_password(password) == false){
        alert('Insert valid Email and Password');
        return
        //Don't continue running the code
    }

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        set(ref(db, 'users/' + user.uid),{
            email: email,
            full_name: full_name,
            last_login: Date.now(),
        })

        console.log('User Created!!');
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode+ ' ' + errorMessage);
    });
  }



  function login() {
    console.log('clicked');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(validate_email(email) == false || validate_password(password) == false){
        alert('Insert valid Email and Password');
        return
        //Don't continue running the code
    }
    if(validate_field(full_name) == false){
        alert('One or more field is empty!!');
        return
    }

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert(user.email +' Signed In!!');
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode + errorMessage);
    });
  }




  function validate_email(email) {
    var exprr = /^[^@]+@\w+(\.\w+)+\w$/
    if(exprr.test(email) == true){
        return true
    } else {
        return false
    }
  }

  function validate_password(password) {
    if(password < 6){
        return false
    } else {
        return true
    }
  }

  function validate_field(field){
    if(field == null){
        return false
    }

    if(field.length <= 0){
        return false
    } else {
        return true
    }
  }