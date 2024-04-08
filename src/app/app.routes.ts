import { Routes } from '@angular/router';
import { ErrorComponent } from './Components/Lab4/Routing/error/error.component';
import { ValidComponent } from './Components/Lab4/Routing/home/valid.component';
import { UsersComponent } from './Components/Lab4/Routing/users/users.component';
import { UsersDetailsComponent } from './Components/Lab4/Routing/users-details/users-details.component';
import { ProfileComponent } from './Components/Lab4/Routing/profile/profile.component';


export const routes: Routes = [
  {path:"", component:ValidComponent},
  {path:"home", component:ValidComponent},
  {path:"users", component:UsersComponent},
  {path:"users/:id", component:UsersDetailsComponent},
  {path:"profile", component:ProfileComponent},
  {path:"error", component:ErrorComponent},
  {path:"**", component:ErrorComponent}
];
