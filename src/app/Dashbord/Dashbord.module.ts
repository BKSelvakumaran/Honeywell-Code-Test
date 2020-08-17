import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
 
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from './Dashbord.component';
import {DashbordRoute} from '../Routing/Dashbord.Routing';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild(DashbordRoute),
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashbordModule { }
