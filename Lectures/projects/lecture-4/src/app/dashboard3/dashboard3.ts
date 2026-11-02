import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';

@Component({
  imports: [RouterModule, Header, Sidebar, Footer],
  selector: 'app-dashboard3',
  styleUrl: './dashboard3.css',
  templateUrl: './dashboard3.html',
})
export class Dashboard3 {}