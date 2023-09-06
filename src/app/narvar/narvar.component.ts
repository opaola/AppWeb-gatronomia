import { Component } from '@angular/core';
import { Eat } from '../eat-interfaz';

@Component({
  selector: 'app-narvar',
  templateUrl: './narvar.component.html',
  styleUrls: ['./narvar.component.scss']
})
export class NarvarComponent {
 
  newEat =
  {
    name: '',
    country: '',
    history: '',
    photo: './assets/image/1.png'
  };

  eats: Eat[] = [
    
  ]

  agregarEat() {
    const newEatItem: Eat = {
      name: this.newEat.name,
      country: this.newEat.country,
      history: this.newEat.history,
      photo: this.newEat.photo
    };
  
    this.eats.push(newEatItem);
    this.newEat = {
      name: '',
      country: '',
      history: '',
      photo: './assets/image/pizza.png'
    };
  }

  eliminarEat(index: number) {
    this.eats.splice(index, 1); /*splice para eliminar, index para saber que posicion elimina y elijo la cantidad*/
  }
}
