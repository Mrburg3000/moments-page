import { Component } from '@angular/core';
import { NewMoment } from "../new-moment/new-moment";

@Component({
  selector: 'app-home',
  imports: [NewMoment],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {

}
