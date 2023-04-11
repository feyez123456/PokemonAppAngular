import { RouterModule,Routes } from "@angular/router";
import { PokemonsComponent } from "./pokémons/list-pokémons/pokémons.component";
import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from "./page_not_found/page-not-found-component";
import { PokemonDetailsComponent } from "./pokemon-details/pokemon-details.component";

const routes : Routes = [
    {path:'',redirectTo : 'pokemon/all',pathMatch:"full"},
    {path:'pokemon/all',component:PokemonsComponent},
    {path:'pokemon/:id',component:PokemonDetailsComponent},
    {path:'**',component:PageNotFoundComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}