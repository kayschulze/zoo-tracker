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
      <h3><strong>{{currentZooAnimal.name}}</strong></h3>
      <h4>Species: {{currentZooAnimal.species}}</h4>
      <h4>Age: {{currentZooAnimal.age}}</h4>
      <h4>Diet: {{currentZooAnimal.diet}}</h4>
      <h4>Location: {{currentZooAnimal.location}}</h4>
      <h4>Caretakers: {{currentZooAnimal.caretakers}}</h4>
      <h4>Sex: {{currentZooAnimal.sex}}</h4>
      <h4>Likes: {{currentZooAnimal.likes}}</h4>
      <h4>Dislikes: {{currentZooAnimal.dislikes}}</h4><br>

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
