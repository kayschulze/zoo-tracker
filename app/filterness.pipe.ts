import { Pipe, PipeTransform } from '@angular/core';
import { ZooAnimal } from './zooanimal';

@Pipe({
  name: "filterness",
  pure: false
})

export class FilternessPipe implements PipeTransform {
  transform(input: ZooAnimal[], desiredFilter) {
    var output: ZooAnimal[] = [];
    if(desiredFilter === "youngAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age < 2) {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if (desiredFilter === "matureAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age >= 2) {
          output.push(input[i]);
        }
      }
      return output;
    }
    else {
      return input;
    }
  }
}
