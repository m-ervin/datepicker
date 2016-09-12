import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ClickOutsideModule } from 'ng2-click-outside';

@NgModule({
  imports: [ BrowserModule, FormsModule, DatepickerModule, ClickOutsideModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
