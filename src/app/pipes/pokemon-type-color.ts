import { Pipe,PipeTransform } from "@angular/core";


@Pipe({ name:'pokemonTypeColor'})
export class PokemonTypeColorPipe implements PipeTransform {
    transform(type: string): string {
        let color: string; 
        switch (type) {
            case 'Feu':
                color = 'red lighthen-1'; 
            break;
            case 'Vol': 
                color = 'blue '; 
            break;
            case 'Electrique': 
                color = 'yellow'; 
            break;
            default :
                color = 'white'
            
        }
        return 'chip' + color; 
        
    }
}