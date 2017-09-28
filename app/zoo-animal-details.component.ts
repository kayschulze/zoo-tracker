import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ZooAnimal } from './zooanimal';

@Component({
  selector: 'zoo-animal-details',
  template: `
      <div class="displayDetails">
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

export class ZooAnimalDetailsComponent {
  @Input() currentZooAnimal: ZooAnimal;
  @Output() clickSender = new EventEmitter();

  editButtonClicked(zooAnimalToEdit: ZooAnimal) {
    this.clickSender.emit(zooAnimalToEdit);
  }

  hide(): void {
    this.currentZooAnimal = null;
  }

}
