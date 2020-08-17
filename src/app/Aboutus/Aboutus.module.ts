import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from  './Aboutus.component'

import {AboutusRoute} from '../Routing/Aboutus.Routing'
 
 

@NgModule({
  declarations: [
     AboutusComponent
  ],
  imports: [
    RouterModule.forChild(AboutusRoute),
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AboutusComponent]
})
export class AboutusModule { }
