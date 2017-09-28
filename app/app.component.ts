import { Component } from '@angular/core';
import { ZooAnimal } from './zooanimal';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
     <h1>The Menagerie Zoo</h1>
     <list-animals [zooAnimalList] = "masterZooAnimalList" (clickSender) = "editZooAnimal($event)"></list-animals>

     <add-zoo-animal (newZooAnimalSender) = "addZooAnimal($event)"></add-zoo-animal>
  `
})

export class AppComponent {
  selectedZooAnimal = null;

  masterZooAnimalList: ZooAnimal[] = [
    new ZooAnimal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
    new ZooAnimal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based')
  ]

  editZooAnimal(clickedZooAnimal) {
    this.selectedZooAnimal = clickedZooAnimal;
  }

  saveEditing() {
    this.selectedZooAnimal = null;
  }

  addZooAnimal(newZooAnimalFromChild: ZooAnimal) {
    this.masterZooAnimalList.push(newZooAnimalFromChild);
  }
}
