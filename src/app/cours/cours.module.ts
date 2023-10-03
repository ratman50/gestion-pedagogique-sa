import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CoursRoutingModule } from './cours-routing.module';
import { CoursComponent } from './cours.component';
import { CoursFormComponent } from './components/cours-form/cours-form.component';
import { CoursListComponent } from './components/cours-list/cours-list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CoursService } from './cours.service';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    CoursComponent,
    CoursFormComponent,
    CoursListComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers:[
    CoursService,
    DataService
  ]
})
export class CoursModule { }
