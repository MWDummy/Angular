import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  encapsulation: ViewEncapsulation.None,
})
export class App {
  protected readonly title = signal('Tegar (272102692)');
}