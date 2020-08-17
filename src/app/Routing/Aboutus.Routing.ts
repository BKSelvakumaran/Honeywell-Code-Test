import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
 
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
 

import {AboutusComponent} from '../Aboutus/Aboutus.component';

export const AboutusRoute: Routes = [{path:'Add',component:AboutusComponent}];
 