import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ZooAnimal } from './zooanimal';

@Component({
  selector: 'add-zoo-animal',
  template: `
    <div class="md-col-4">
      <h4>Add New Zoo Animal</h4>

      <label for="name">Name</label>
      <input type="text" #name placeholder="name" required><br>

      <label for="species">Species</label>
      <input type="text" #species placeholder="species" required><br>

      <label for="age">Age</label>
      <input type="number" #age placeholder="age" required><br>

      <label for="diet">Diet</label>
      <input type="text" #diet placeholder="diet" required><br>

      <label for="location">Location</label>
      <input type="text" #location placeholder="location" required><br>

      <label for="caretakers">Caretakers</label>
      <input type="number" #caretakers placeholder="caretakers" required><br>

      <label for="sex">Sex</label>
      <input type="text" #sex placeholder="sex" required><br>

      <label for="likes">Likes</label>
      <input type="text" #likes placeholder="likes" required><br>

      <label for="dislikes">Dislikes</label>
      <input type="text" #dislikes placeholder="dislikes" required><br>

      <button (click) = "addZooAnimal(name.value, species.value, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value)">Add Zoo Animal</button>
    </div>

  `
})

export class AddZooAnimalComponent {
  @Output() newZooAnimalSender = new EventEmitter();

  addZooAnimal(name: string, species: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newZooAnimalToAdd: ZooAnimal = new ZooAnimal(name, species, age, diet, location, caretakers, sex, likes, dislikes);

    this.newZooAnimalSender.emit(newZooAnimalToAdd);
  }


}
