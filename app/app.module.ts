import { NgModule }     from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { ListAnimalsComponent } from './list-animals.component';
import { EditZooAnimalComponent } from './edit-zoo-animal.component';
import { AddZooAnimalComponent } from './add-zoo-animal.component';
import { FilternessPipe } from './filterness.pipe';
import { ZooAnimalDetailsComponent } from './zoo-animal-details.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ListAnimalsComponent, EditZooAnimalComponent, AddZooAnimalComponent, FilternessPipe, ZooAnimalDetailsComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
