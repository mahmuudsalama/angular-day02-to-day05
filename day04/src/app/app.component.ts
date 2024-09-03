import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NavbarComponent , HomeComponent, LoginComponent,ProductsComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  TrackData:string = '';
  getData(data: any) {
    this.TrackData = data;
  }

  selectedComponent: string = 'home';

  displayComponent(component: string): void {
    this.selectedComponent = component;
  }
}
