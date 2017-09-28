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
    <div>
    <div *ngFor="let zooAnimal of zooAnimalList" [class.selected] = "zooAnimal === selectedZooAnimal"(click) = "onSelect(zooAnimal)">
      <h4>{{zooAnimal.name}}</h4>

      <zoo-animal-details [currentZooAnimal] = "zooAnimal"></zoo-animal-details>

      </div>


      <edit-zoo-animal [childSelectedZooAnimal] = "selectedZooAnimal" (doneButtonClickedSender) = "saveEditing()"></edit-zoo-animal>
    </div>
  `
})

//

export class ListAnimalsComponent {
  @Input() zooAnimalList: ZooAnimal[];
  //@Output() currentZooAnimal: ZooAnimal;

  selectedZooAnimal: ZooAnimal;
  filterByFilterness: string = "everything";

  onChange(optionFromMenu) {
    this.filterByFilterness = optionFromMenu;
  }

  onSelect(chosenZooAnimal:ZooAnimal): void {
    this.selectedZooAnimal = chosenZooAnimal;
  }

  saveEditing() {
    this.selectedZooAnimal = null;
  }

  editZooAnimal(clickedZooAnimal) {
    this.selectedZooAnimal = clickedZooAnimal;
  }

}
