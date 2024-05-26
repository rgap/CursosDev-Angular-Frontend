import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { appConfig } from './app/app.config';
import { UsernameComponent } from './app/username.component';

// platformBrowserDynamic().bootstrapModule(AppModule);

bootstrapApplication(UsernameComponent, appConfig).catch((err) =>
  console.error(err)
);
