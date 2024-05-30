import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = "Alisson";
  age: number = 29;
  job = "Programador"
  hobbies = ["Correr", "Brincar", "Estudar"]
  car = {
    name: "Tesla",
    year: "2022"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
