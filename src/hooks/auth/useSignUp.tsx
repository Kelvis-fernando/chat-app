import { useForm } from "react-hook-form";
import { registerAccountService } from "../../service/auth/signUpService";
import { SignUpInputs } from "../../types/auth";

export const useSignUp = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<SignUpInputs>();

   const onSubmit = (dataFromRegister: SignUpInputs) => {
      registerAccountService(dataFromRegister);
   };

   return {
      register,
      handleSubmit,
      watch,
      onSubmit,
      errors,
   };
};
