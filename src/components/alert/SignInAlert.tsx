import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export async function SuccessAlert(message: string) {
   await MySwal.fire({
      position: "center",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500,
   });
}

export async function ErrorAlert(message: any) {
   await MySwal.fire({
      position: "center",
      icon: "error",
      title: message,
      showConfirmButton: true,
   });
}
