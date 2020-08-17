 
import {AppComponent} from '../app.component';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../Login/login.component';
 

export const MainRoutes:Routes  = [
      {path:'Login',component: LoginComponent},
      {path:'Dashboard',loadChildren:'./Dashbord/Dashbord.module#DashbordModule'},  
      {path:'Aboutus',loadChildren:'./Aboutus/Aboutus.module#AboutusModule'},  
      {path: 'Logout', redirectTo: 'Login' },
      {path:'',component:LoginComponent},
      {path: '**', redirectTo: 'Login' } 
];

     
  
