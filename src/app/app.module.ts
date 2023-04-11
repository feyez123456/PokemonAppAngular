import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokémons/list-pokémons/pokémons.component';
import { AppRoutingModule } from './app-routing-module';
import { PageNotFoundComponent } from './page_not_found/page-not-found-component';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color';
import { BorderCardDirective } from './directive/border-card.directive';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component'; @NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PageNotFoundComponent,
    PokemonTypeColorPipe,
    BorderCardDirective,
    PokemonDetailsComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
