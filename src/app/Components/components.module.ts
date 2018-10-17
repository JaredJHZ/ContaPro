import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './Shared/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavigationComponent, LoadingComponent],
  exports: [NavigationComponent, LoadingComponent]
})
export class ComponentsModule { }
