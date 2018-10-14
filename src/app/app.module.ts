import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MaterialModule } from './Material/material.module';
import { PagesModule } from './Pages/pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    MaterialModule,
    PagesModule,
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
