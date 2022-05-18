import { Injectable } from "@angular/core";
import Swal, { SweetAlertIcon } from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  constructor() {}

  timer(
    title: string,
    html: string,
    icon?: SweetAlertIcon,
    timer: number = 1200,
    showConfirmButton: boolean = false,
    showCancleButton: boolean = false
  ) {
    let timerInterval;
    Swal.fire({
      ...(title && { title: title }),
      ...(html && { html: html }),
      timer: timer,
      showCancelButton: showCancleButton,
      showConfirmButton: showCancleButton,
      ...(icon && { icon: icon }),
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        // closed by timer
      }
    });
  }
}
