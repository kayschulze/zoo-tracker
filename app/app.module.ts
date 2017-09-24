import { NgModule }     from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { ListAnimalsComponent } from './list-animals.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ListAnimalsComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
