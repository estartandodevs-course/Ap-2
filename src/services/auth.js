import firebase from "firebase/app";
import "firebase/auth";


export async function login(email, password) {
    console.log(email, password)
    try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password);
        
        return { data: user, success: true };
    } catch (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        return { data: { errorCode, errorMessage }, success: false };
    }
}