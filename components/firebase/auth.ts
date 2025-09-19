import { auth } from "@/components/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
} from "firebase/auth";

export async function register(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);

  return result;
};

export const logOut = async () => {
  return auth.signOut();
};

// export const doPasswordReset = async (email: string) => {
//   return sendPasswordResetEmail(auth, email);
// };

// export const doPasswordChange = async (password: string) => {
//   if (!auth.currentUser) {
//     throw new Error("No authenticated user found.");
//   }
//   return updatePassword(auth.currentUser, password);
// };

// export const doSendEmailVerification = async () => {
//   if (!auth.currentUser) {
//     throw new Error("No authenticated user found.");
//   }
//   return sendEmailVerification(auth.currentUser, {
//     url: `${window.location.origin}/home`,
//   });
// };
