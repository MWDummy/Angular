import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login implements OnDestroy {
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'login-page');
    this.renderer.addClass(document.body, 'bg-body-secondary');
    this.renderer.setAttribute(document.body, 'data-bs-theme', 'dark');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'login-page');
    this.renderer.removeClass(document.body, 'bg-body-secondary');
    this.renderer.removeAttribute(document.body, 'data-bs-theme');
  }
}