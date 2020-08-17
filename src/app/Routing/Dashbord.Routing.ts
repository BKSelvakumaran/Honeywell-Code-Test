import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
 
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
 

import {DashboardComponent} from '../Dashbord/Dashbord.component';
 
export const DashbordRoute: Routes = [{path:'Add',component:DashboardComponent}];