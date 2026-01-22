import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moment-form',
  imports: [],
  templateUrl: './moment-form.html',
  styleUrl: './moment-form.css',
})
export class MomentForm {
  @Input() btnText: string = '';
}
