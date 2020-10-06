import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { DataComponent } from './data/data.component';
import { DatePipeComponent } from './date-pipe/date-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    DataComponent,
    DatePipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
