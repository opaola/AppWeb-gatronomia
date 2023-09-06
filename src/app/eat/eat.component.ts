import { Component } from '@angular/core';
import { Eat } from '../eat-interfaz';

@Component({
  selector: 'app-eat',
  templateUrl: './eat.component.html',
  styleUrls: ['./eat.component.scss']
})
export class EatComponent {

  newEat =
  {
    name: '',
    country: '',
    history: '',
    photo: './assets/image/1.png'
  };

  eats: Eat[] = [
    {
      name: 'Empanadas',
      country: 'Colombia',
      history: 'Son pequeñas empanadas rellenas de carne, pollo, papa o queso, que se fríen hasta que estén crujientes. Se sirven comúnmente como aperitivo.',
      photo: './assets/image/empanadas.png'
    },
    {
      name: 'Parrillada',
      country: 'Argentina',
      history: 'Puedes encontrar parrillas (asados) en casi todas partes, donde se sirven cortes de carne como el famoso bife de chorizo. También es famosa por las milanesas (filetes empanizados).',
      photo: './assets/image/parillares.png'
    },
    {
      name: 'Pasta',
      country: 'Italia',
      history: 'La pasta es un plato icónico de la comida italiana. Spaghetti a la bolognesa, lasaña, risotto y tiramisú son favoritos. Italia también es conocida por sus quesos y vinos',
      photo: './assets/image/pasta.png'
    },
    {
      name: 'Hamburguesa',
      country: 'Estados Unidos',
      history: 'La hamburguesa es un ícono de la comida estadounidense. También son famosos los hot dogs, el pollo frito y las costillas a la barbacoa. La pizza también es muy popular en todo el país.',
      photo: './assets/image/hamburguesa.png'
    },
    {
      name: 'Coq au vin',
      country: 'Francia',
      history: 'La cocina francesa es reconocida mundialmente por su sofisticación. Platos como el coq au vin, el ratatouille, el croissant y la quiche son emblemáticos. Francia es famosa por su pan y su repostería, como los macarons y los croissants.',
      photo: './assets/image/Coqauvin.png'
    },
    {
      name: 'Sashimi',
      country: 'Japón',
      history: 'El sashimi y el sushi son platos japoneses muy conocidos. El ramen, el tempura y el okonomiyaki también son populares. Japón es famoso por su atención al detalle en la presentación de la comida.',
      photo: './assets/image/Sashimi.png'
    },
    {
      name: 'Borsch',
      country: 'Rusia',
      history: 'El borsch, una sopa de remolacha, es uno de los platos más emblemáticos de Rusia. El estrogonofe, el pelmeni (dumplings) y el caviar son otros ejemplos de la comida.',
      photo: './assets/image/borsch.png'
    },
    {
      name: 'Curry',
      country: 'India',
      history: 'El curry es una parte esencial de la cocina india. Platos como el pollo tikka masala, el biryani, el paneer tikka y el samosa son muy populares. La comida india es conocida por su variedad de sabores y especias.',
      photo: './assets/image/curry.png'
    },
  ]
}
