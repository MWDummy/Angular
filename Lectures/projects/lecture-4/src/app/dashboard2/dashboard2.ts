import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';

@Component({
  imports: [RouterModule, Header, Sidebar, Footer],
  selector: 'app-dashboard2',
  styleUrl: './dashboard2.css',
  templateUrl: './dashboard2.html',
})
export class Dashboard2 {}