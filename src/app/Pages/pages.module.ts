import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '../Material/material.module';
import { ComponentsModule } from '../Components/components.module';
import { LoginComponent } from '../Pages/login/login.component';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [HomeComponent, LoginComponent],
  exports: [HomeComponent]
})
export class PagesModule { }
