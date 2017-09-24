import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ZooAnimal } from './zooanimal';

@Component({
  selector: 'list-animals',
  template: `
    <select (change) = "onChange($event.target.value)">
      <option value="viewAll" selected="selected">View All Animals</option>
      <option value="youngAnimals">Young Animals (< 2 years)</option>
      <option value="matureAnimals">Mature Animals (>= 2 years)</option>
    </select>
    <div *ngFor="let currentZooAnimal of zooAnimalList | filterness:filterByFilterness">
      <h4>{{currentZooAnimal.name}}</h4>
      <ul><li>Species: {{currentZooAnimal.species}}</li>
      <li>Age: {{currentZooAnimal.age}}</li>
      <li>Diet: {{currentZooAnimal.diet}}</li>
      <li>Location: {{currentZooAnimal.location}}</li>
      <li>Caretakers: {{currentZooAnimal.caretakers}}</li>
      <li>Sex: {{currentZooAnimal.sex}}</li>
      <li>Likes: {{currentZooAnimal.likes}}</li>
      <li>Dislikes: {{currentZooAnimal.dislikes}}</li></ul>

      <button (click) = "editButtonClicked(currentZooAnimal)">Edit Zoo Animal</button></div>
  `
})

export class ListAnimalsComponent {
  @Input() zooAnimalList: ZooAnimal[];
  @Output() clickSender = new EventEmitter();

  filterByFilterness: string = "everything";

  editButtonClicked(zooAnimalToEdit: ZooAnimal) {
    this.clickSender.emit(zooAnimalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByFilterness = optionFromMenu;
  }
}
