import { Component } from '@angular/core';
import { AppTheme as theme } from "./app-theme"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  inputStyles = theme.input
}
