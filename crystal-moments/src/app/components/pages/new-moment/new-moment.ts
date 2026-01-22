import { Component } from '@angular/core';
import { MomentForm } from "../../moment-form/moment-form";

@Component({
  selector: 'app-new-moment',
  imports: [MomentForm],
  templateUrl: './new-moment.html',
  styleUrl: './new-moment.css',
})
export class NewMoment {
  btnText: string = 'Share';
}
