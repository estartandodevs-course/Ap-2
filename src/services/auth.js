import firebase from "firebase/app";
import "firebase/auth";

export async function login(email, password) {
  try {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    return { data: user, success: true };
  } catch (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    return { data: { errorCode, errorMessage }, success: false };
  }
}

export function onAuthStateChanged(callback) {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback({ isLogged: true });
    } else {
      callback({ isLogged: false });
    }
  });
}

export async function logout() {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.log(error);
  }
}
