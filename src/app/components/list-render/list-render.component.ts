import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animalDetails = ''
  animals: Animal[] = [
    {name: "Turca", type: "Dogs", age: 4},
    {name: "Tom", type: "Cat", age: 10},
    {name: "Freda", type: "Dog", age: 5},
    {name: "Bob", type: "Horse", age: 1}
  ]
  constructor(private listService:ListService) { }

  ngOnInit(): void {
  }

  showAge(animal:Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} ${animal.age > 1 ? 'anos' : 'ano'}`
  }

  removeAnimal(animal:Animal){
    console.log('Removendo animal...')
    this.animals = this.listService.remove(this.animals, animal)
  }
}
