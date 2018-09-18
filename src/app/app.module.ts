import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MaterialModule } from './material.module';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { HeroComponent } from './heroes/heroes-list/hero/hero.component';
import { HeroService } from './heroes/shared/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesListComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
