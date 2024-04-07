import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderComponent } from './Components/slider/slider.component';
import { InputComponent } from './Components/input/input.component';
import { RegisterationComponent } from './Components/registeration/registeration.component';
import { StudentsComponent } from './Components/students/students.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InputComponent,
    SliderComponent,
    RegisterationComponent,
    StudentsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Students:{name:string, age:string}[] = [];

  getData(student:any){
    this.Students.push(student);
  }

}
