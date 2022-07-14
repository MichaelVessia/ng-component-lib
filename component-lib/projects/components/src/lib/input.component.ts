import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputStyles } from "./input-styles";
import { FloTheme as theme } from "./theme";

@Component({
  standalone: true,
  selector: 'flo-input',
  imports: [CommonModule],
  template: `
  <div>
    <p>Hello from library</p>
    <input type="text" [ngStyle]="inputStyles">
  </div>
  `
})
export class InputComponent implements OnInit {

  @Input() styles: Partial<InputStyles> = {};
  inputStyles: InputStyles;

  constructor() { }

  ngOnInit() {
    this.inputStyles = { ...theme.input, ...this.styles };
  }
}
