import { SubmitHandler, useForm } from "react-hook-form";
import { forgotPasswordService } from "../../service/auth/forgotPasswordService";
import { ForgotPasswordInput } from "../../types/auth";

export const useForgotPassword = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<ForgotPasswordInput>();

   const onSubmit: SubmitHandler<ForgotPasswordInput> = (resp) => {
      forgotPasswordService(resp.email);
   };

   return {
      onSubmit,
      forgotPasswordService,
      register,
      handleSubmit,
      watch,
   };
};
