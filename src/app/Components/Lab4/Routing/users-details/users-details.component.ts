import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-details',
  standalone: true,
  imports: [],
  templateUrl: './users-details.component.html',
  styles: ``
})
export class UsersDetailsComponent {
  ID = 0;
  constructor(myRoute: ActivatedRoute){
    this.ID = myRoute.snapshot.params["id"];
  }
}
