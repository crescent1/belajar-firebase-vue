import { getAuth, signOut } from "firebase/auth";

export class AuthSignOut {
  static userSignOut() {
    // console.log('test');
    const auth = getAuth();
    // console.log(auth);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("sign out");
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
