import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderComponent } from './Components/slider/slider.component';
import { InputComponent } from './Components/input/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InputComponent,
    SliderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab1';
}
