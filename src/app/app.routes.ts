import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserInteractionComponent } from './user-interaction/user-interaction.component';

export const routes: Routes = [{
    path:'', 
    component: HomeComponent
},
{
    path:'interaction',
    component: UserInteractionComponent
}];
