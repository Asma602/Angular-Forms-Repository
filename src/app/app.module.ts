import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { FirstComponentComponent } from './first-component/first-component.component';
import { HttpClient, HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    FirstComponentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
