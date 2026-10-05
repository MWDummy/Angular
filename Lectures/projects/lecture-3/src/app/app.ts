import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  name = "Tegar Ardana";
  email = "oui@gmail.com";
  nim = "272102692";
  title = "Angular_Theme";
}
