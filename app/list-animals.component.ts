import { Component, Input } from '@angular/core';
import { ZooAnimal } from './zooAnimal';

@Component({
  selector: 'list-animals',
  template: `
    <li *ngFor="let zooAnimal of zooAnimalList">
      <h4>{{zooAnimal.name}}</h4>
      <ul><li>Species: {{zooAnimal.species}}</li>
      <li>Age: {{zooAnimal.age}}</li>
      <li>Diet: {{zooAnimal.diet}}</li>
      <li>Location: {{zooAnimal.location}}</li>
      <li>Caretakers: {{zooAnimal.caretakers}}</li>
      <li>Sex: {{zooAnimal.sex}}</li>
      <li>Likes: {{zooAnimal.likes}}</li>
      <li>Dislikes: {{zooAnimal.dislikes}}</li></ul>
  `
})

export class ListAnimalsComponent {
  @Input() zooAnimalList: ZooAnimal[];
}
