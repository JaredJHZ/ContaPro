import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '../../Material/material.module';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class PagesModule { }
