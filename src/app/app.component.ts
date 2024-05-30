import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = 'Joaquin'
  userData = {
    email: "joaqui@teste.com.br",
    role: "Admin"
  }
  title = 'curso-angular';
}
