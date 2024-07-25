// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut 
  
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    auth_container.style.display = "none";
    user_container.style.display = "block";
    user_email.innerText = user.email; 
    user_container.style.display = "flex";
    // ...
  } else {
    user_container.style.display = "flex";
    auth_container.style.display = "block";
    user_container.style.display = "none";
    
    
    // User is signed out
    // ...
  }
});

// =======  Auth Container =====

const signup_email = document.getElementById("signup_email");
const signup_password = document.getElementById("signup_password");
const signup_btn = document.getElementById("signup_btn");

const signin_email = document.getElementById("signin_email");
const signin_password = document.getElementById("signin_password");
const signin_btn = document.getElementById("signin_btn");

// ======= User Container =========

const user_container = document.getElementById("user_container");
const user_email = document.getElementById("user_email");
const logout_btn = document.getElementById("logout_btn");



// ========== addEventListener  =======

signup_btn.addEventListener("click", creatUserAccount);
signin_btn.addEventListener("click", signIn);
logout_btn.addEventListener("click", logOut);

function creatUserAccount() {
  //  console.log("email==>" , signup_email.value);
  //  console.log("password==>" , signup_password.value);
  createUserWithEmailAndPassword(
    auth,
    signup_email.value,
    signup_password.value
  )
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

//  ===================sign in ================

function signIn() {
  // console.log("email==>" , signin_email.value);
  // console.log("password==>" , signin_password.value);
  signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

function logOut() {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}




          // ======== Cirar-text-effect =======

const text = document.getElementById("text");

text.innerHTML = text.textContent.replace
    (/\S/g,"<span>$&</span>");
const ele = document.querySelectorAll('span');
for (var i = 1; i < ele.length; i++) {
  ele[i].style.transform = "rotate("+i*
      15+"deg)";
}              
  