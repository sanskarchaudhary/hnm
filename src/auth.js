import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result;
  } catch (error) {
    throw error;
  }
};

// export const doSignOut = async () =>{
//     return signOut(auth);
// };

// export const doPasswordReset = async (email) =>{
//     return sendPasswordResetEmail(auth, email);
// };

// export const doPasswordChange = async (password) =>{
//     return updatePassword(auth.currentUser, password);
// };

// export const doSendEmailVerification = async () =>{
//     return sendEmailVerification(auth.currentUser,{
//         url: '${window.location.origin}/login'
//     });
//}
