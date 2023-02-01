import { SubmitHandler, useForm } from "react-hook-form";
import { signInService } from "../../service/auth/signInService";
import { SignIn } from "../../types/auth";

export const useSignIn = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<SignIn>();

   const onSubmit: SubmitHandler<SignIn> = async (userEmailAndPassword) => {
      await signInService(userEmailAndPassword);
   };

   return {
      register,
      handleSubmit,
      watch,
      onSubmit,
      errors,
   };
};
