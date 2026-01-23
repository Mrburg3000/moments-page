import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Messages } from "./components/messages/messages";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Messages],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('crystal-moments');
}
