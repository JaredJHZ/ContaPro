import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '../Material/material.module';
import { ComponentsModule } from '../Components/components.module';
import { LoginComponent } from '../Pages/login/login.component';
import { QuizComponent } from '../Pages/quiz/quiz.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    ComponentsModule
  ],
  declarations: [HomeComponent, LoginComponent, QuizComponent],
  exports: [HomeComponent]
})
export class PagesModule { }
