import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase.config";
import { ErrorAlert, SuccessAlert } from "../../components/alert/SignInAlert";

export const forgotPasswordService = async (email: any) => {
   sendPasswordResetEmail(auth, email)
      .then(() => {
         SuccessAlert("Email for recover password was send");
      })
      .catch((error) => {
         ErrorAlert(error);
      });
};
