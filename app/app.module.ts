import { NgModule }     from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { ListAnimalsComponent } from './list-animals.component';
import { EditZooAnimalComponent } from './edit-zoo-animal.component';
import { AddZooAnimalComponent } from './add-zoo-animal.component';
import { FilternessPipe } from './filterness.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ListAnimalsComponent, EditZooAnimalComponent, AddZooAnimalComponent, FilternessPipe ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
