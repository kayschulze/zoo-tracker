import { NgModule }     from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { ListAnimalsComponent } from './list-animals.component';
import { EditZooAnimalComponent } from './edit-zoo-animal.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ListAnimalsComponent, EditZooAnimalComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
