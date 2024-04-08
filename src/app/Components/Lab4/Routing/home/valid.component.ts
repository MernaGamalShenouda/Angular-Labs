import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-valid',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './valid.component.html',
  styles: ``
})
export class ValidComponent {
  regForm = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(3)]),
    age: new FormControl("",[Validators.required,Validators.min(20),Validators.max(40)]),
    email: new FormControl("",[Validators.required,Validators.email])
  })

  getData(){
    this.regForm.markAllAsTouched();
  }

  get NameValid(){
    return this.regForm.controls["name"].valid;
  }

  get AgeValid(){
      return this.regForm.controls["age"].valid;
  }

  get EmailValid(){
    return this.regForm.controls["email"].valid;
  }
  //#endregion

}
