import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase.config";
import { ErrorAlert, SuccessAlert } from "../../components/alert/SignInAlert";
import { SignUpInputs } from "../../types/auth";

export const registerAccountService = async (
   dataFromRegister: SignUpInputs
) => {
   try {
      if (
         dataFromRegister?.email !== undefined &&
         dataFromRegister?.password !== undefined
      ) {
         await createUserWithEmailAndPassword(
            auth,
            dataFromRegister?.email,
            dataFromRegister?.password
         );
         SuccessAlert("Sign Up Success");
      }
   } catch (error) {
      ErrorAlert(error);
   }
};
