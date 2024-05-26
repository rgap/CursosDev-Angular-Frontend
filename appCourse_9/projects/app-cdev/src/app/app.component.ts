import { Component } from '@angular/core';
import { PageLoginComponent } from './core/presentation/components/smart/page-login/page-login.component';

@Component({
  selector: 'cdev-root',
  standalone: true,
  imports: [PageLoginComponent], // Fix: Replace 'import' with 'imports'
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'appCDev';
}
