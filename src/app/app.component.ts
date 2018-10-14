import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contapro';
  toggleOpen = false;

  public open(drawer: any): void {
    drawer.toggle();
    this.toggleOpen = !this.toggleOpen;
  }
  
}
