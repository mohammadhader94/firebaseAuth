import app from "firebase/app";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyDKj2by1iLk34wgo9NyD7SgGYYSqEJlUJ8",
  authDomain: "directions-e6778.firebaseapp.com",
  databaseURL: "https://directions-e6778.firebaseio.com",
  projectId: "directions-e6778",
  storageBucket: "directions-e6778.appspot.com",
  messagingSenderId: "97919826644"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
