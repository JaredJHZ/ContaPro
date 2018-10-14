import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
