import { Component } from '@angular/core';
import { ZooAnimal } from './zooAnimal';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
     <h1>The Menagerie Zoo</h1>
     <list-animals [zooAnimalList] = "masterZooAnimalList"></list-animals>
  `
})

// <edit-details></edit-details>
// <add-animal></add-animal>

export class AppComponent {

  masterZooAnimalList: ZooAnimal[] = [
    new ZooAnimal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
    new ZooAnimal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based')
  ]


}
