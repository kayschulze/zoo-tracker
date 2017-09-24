import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ZooAnimal } from './zooanimal';

@Component({
  selector: 'edit-zoo-animal',
  template: `
    <div class='editFields' *ngIf="childSelectedZooAnimal">
    <h4><input [(ngModel)]="childSelectedZooAnimal.name"></h4>
    <ul><li>Species: <input [(ngModel)] = "childSelectedZooAnimal.species"></li>
    <li>Age: <input [(ngModel)] = "childSelectedZooAnimal.age"></li>
    <li>Location: <input [(ngModel)] = "childSelectedZooAnimal.location"></li>
    <li>Caretakers: <input [(ngModel)] = "childSelectedZooAnimal.caretakers"></li>
    <li>Sex: <input [(ngModel)] = "childSelectedZooAnimal.sex"></li>
    <li>Likes: <input [(ngModel)] = "childSelectedZooAnimal.likes"></li>
    <li>Dislikes: <input [(ngModel)] = "childSelectedZooAnimal.dislikes"></li></ul>

    <button (click) = "doneButtonClicked()">Save Edit</button>
    </div>
  `
})

export class EditZooAnimalComponent {
  @Input() childSelectedZooAnimal: ZooAnimal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
