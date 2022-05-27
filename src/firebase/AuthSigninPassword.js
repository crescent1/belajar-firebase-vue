import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export class AuthSigninPassword {
  static userLogin(credentials) {
    const auth = getAuth();
    // console.log(auth);
    // console.log(credentials);
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }
}
