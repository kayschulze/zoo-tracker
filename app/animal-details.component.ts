import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ZooAnimal } from './zooanimal';

@Component({
  selector: 'animal-details',
  template: `
      <h3><strong>{{text.name}}</strong></h3>
      <h4>Species: {{text.species}}</h4>
      <h4>Age: {{text.age}}</h4>
      <h4>Diet: {{text.diet}}</h4>
      <h4>Location: {{text.location}}</h4>
      <h4>Caretakers: {{text.caretakers}}</h4>
      <h4>Sex: {{text.sex}}</h4>
      <h4>Likes: {{text.likes}}</h4>
      <h4>Dislikes: {{text.dislikes}}</h4><br>

      <button (click) = "editButtonClicked(text)">Edit Zoo Animal</button>
  `
})

export class AnimalDetailsComponent {
  @Input() text: ZooAnimal;
  @Output() clickSender = new EventEmitter();

  editButtonClicked(zooAnimalToEdit: ZooAnimal) {
    this.clickSender.emit(zooAnimalToEdit);
  }

}
