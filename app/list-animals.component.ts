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
    <div *ngFor="let zooAnimal of zooAnimalList | filterness:filterByFilterness" [class.selected] = "zooAnimal === selectedZooAnimal"(click) ="onSelect(zooAnimal)">
      <h3><strong>{{zooAnimal.name}}</strong></h3>
      <h4>Species: {{zooAnimal.species}}</h4>
      <animal-details [text] = "selectedZooAnimal"></animal-details>

<edit-zoo-animal [childSelectedZooAnimal] = "selectedZooAnimal" (doneButtonClickedSender) = "saveEditing()"></edit-zoo-animal>

    </div>

  `
})

export class ListAnimalsComponent {
  @Input() zooAnimalList: ZooAnimal[];
  @Output() clickSender = new EventEmitter();

  selectedZooAnimal = null;

  filterByFilterness: string = "everything";

  onChange(optionFromMenu) {
    this.filterByFilterness = optionFromMenu;
  }

  onSelect(thisZooAnimal:ZooAnimal): void {
    console.log("hi");
    this.selectedZooAnimal = thisZooAnimal;
  }
}
