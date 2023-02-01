import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase.config";
import { ErrorAlert, SuccessAlert } from "../../components/alert/SignInAlert";
import { SignIn } from "../../types/auth";

export const signInService = async (userEmailAndPassword: SignIn) => {
   try {
      if (
         userEmailAndPassword?.email !== undefined &&
         userEmailAndPassword?.password !== undefined
      ) {
         await signInWithEmailAndPassword(
            auth,
            userEmailAndPassword?.email,
            userEmailAndPassword?.password
         );
         SuccessAlert("Sign In Success");
         location.href = "/chat";
      }
   } catch (error) {
      ErrorAlert(error);
   }
};
