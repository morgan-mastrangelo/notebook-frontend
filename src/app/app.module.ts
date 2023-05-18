import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { HomeComponent } from './home/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditmodalComponent } from './note/editmodal/editmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    HomeComponent,
    EditmodalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
