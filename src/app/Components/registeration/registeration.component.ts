import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.css'
})

export class RegisterationComponent {
  name = "";
  age = "";
  student = {};

  @Output() myEvent = new EventEmitter();

  Add(){
    if(+this.age<=30 && +this.age>=10 && this.name.length>=3){
      let newStudent = {name: this.name, age:this.age};
      this.student = newStudent;
      this.myEvent.emit(this.student);
    }
  }
}
