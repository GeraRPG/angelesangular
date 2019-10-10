import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/global/navigation/navigation.component';
import { CakeFormComponent } from './components/cakes/cake-form/cake-form.component';
import { CakeListComponent } from './components/cakes/cake-list/cake-list.component';

import { CakesService } from "./services/cakes.service";
import { CakeAboutComponent } from './components/cake-about/cake-about.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/global/footer/footer.component';
import { NotesListComponent } from './components/notes/notes-list/notes-list.component';
import { NotesFormComponent } from './components/notes/notes-form/notes-form.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CakeFormComponent,
    CakeListComponent,
    CakeAboutComponent,
    HomeComponent,
    FooterComponent,
    NotesListComponent,
    NotesFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    CakesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
