import Swal from "sweetalert2";
import Toast from "sweetalert2";
class MyAlert {
  Alert(icon, text) {
    Swal.fire({
      position: "top",
      icon: icon,
      text: text,
      showConfirmButton: false,
      timer: 2000,
      width: 500,
    });
  }
  Toast(icon, title) {
    Toast.fire({
      icon: icon,
      title: title,
      timer: 2000,
      showConfirmButton: false,
    });
  }
  Confirm(title, icon, text, confirmButtonText, cancelButtonText) {
    return Swal.fire({
      title: title,
      text: text,
      icon: icon,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      width: 550,
      padding: "10px",

      returnInputValueOnDeny: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
    }).then((result) => {
      // Add an isDismissed property to the result object
      result.isDismissed = result.dismiss === Swal.DismissReason.esc || result.dismiss === Swal.DismissReason.backdrop;
      return result;
    });
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new MyAlert();
