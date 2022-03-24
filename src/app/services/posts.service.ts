import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[];

  constructor() {
    this.arrPosts = [
      {
        titulo: 'The Batman',
        texto: '"The Batman” es una película estadounidense de superhéroes dirigida por Matt Reeves y basada en el personaje homónimo creado por Bob Kane y Bill Finger para DC Comics. El guion fue escrito por Reeves y Peter Craig, y narra los acontecimientos del vigilante Batman durante su segundo año luchando contra el crimen y la corrupción en Gotham City, además de enfrentarse al asesino serial Acertijo. Es protagonizada por Robert Pattinson como el personaje titular, así como Zoë Kravitz, Paul Dano, Jeffrey Wright, John Turturro, Peter Sarsgaard, Andy Serkis y Colin Farrell. The Batman prevé ser la primera entrega de una trilogía de Batman y compartirá el mismo universo que una serie derivada a estrenarse por HBO Max.',
        autor: 'Elsa Fernández',
        categoria: 'Acción',
        fecha: '19/03/2022',
        imagen: '../../assets/images/thebatman.jpg'
      },
      {
        titulo: 'En la boca del miedo',
        texto: '"In the Mouth of Madness" es una película estadounidense de terror de 1995, aunque estrenada para un festival en Italia en diciembre de 1994, dirigida por John Carpenter, con guion de Michael De Luca, en el que se percibe gran influencia de los relatos de H.P. Lovecraft, está protagonizada por Sam Neill, Julie Carmen, Jürgen Prochnow y David Warner. El actor Charlton Heston también hace una breve aparición. La cinta es la tercera y última parte de la denominada "Trilogía del Apocalipsis", cuyo nombre y concepto fueron creados por Carpenter, a la que precedieron "The Thing" ("La cosa", 1982) y "Prince of Darkness" ("El príncipe de las tinieblas", 1987). Obtuvo el premio de la crítica en el festival Fantasporto y nominaciones como mejor película del año en los premios Saturn y en los convocados por la revista Cahiers du Cinéma.',
        autor: 'Carmelo Gómez',
        categoria: 'Terror',
        fecha: '18/02/2022',
        imagen: '../../assets/images/enlabocadelalocura.jpg'
      },
      {
        titulo: 'Memento',
        texto: '"Memento" (también conocida como "Amnesia") es una película estadounidense del año 2000, dirigida por Christopher Nolan y protagonizada por Guy Pearce, Carrie-Anne Moss y Joe Pantoliano. La película fue nominada al Globo de Oro al Mejor guion y a dos Óscar (por su guion original y montaje). El guion de Christopher Nolan está basado en un relato llamado "Memento mori" (en latín, "Recuerda que vas a morir"), escrito por su hermano Jonathan y publicado el año siguiente, en 2001. Una de las mayores peculiaridades de la película reside en su línea temporal, contada mediante constantes analepsis y prolepsis, mostrando según avanza la película las causas de lo ya visto, en vez de sus consecuencias. Entre éstas, hay escenas en blanco y negro que progresan en orden normal, pero intercaladas en la historia. Al llegar al final de la cinta, se unen.',
        autor: 'Elsa Fernández',
        categoria: 'Drama',
        fecha: '18/12/2021',
        imagen: '../../assets/images/memento.jpg'
      },
      {
        titulo: 'Tron',
        texto: 'Tron es una película estadounidense estrenada en julio de 1982 del género ciencia ficción escrita y dirigida por Steven Lisberger y protagonizada por Jeff Bridges, Bruce Boxleitner, Cindy Morgan y David Warner. La película sigue al protagonista Kevin Flynn, desarrollador de videojuegos, que trabajaba en la megacorporación ENCOM. Uno de los ejecutivos, Dillinger, ha mentido respecto a las ganancias y autoría de los juegos de Flynn, de los que se apropió. Ante la incapacidad de probar que él es el autor, y renunciando a la compañía, Flynn se ve obligado a trabajar en arcades. Termina siendo teletransportado dentro del mundo virtual del software de una computadora central donde interactúa con muchos programas, mientras busca una forma de escapar.',
        autor: 'Javier Ocaña',
        categoria: 'Ciencia-ficción',
        fecha: '18/10/2021',
        imagen: '../../assets/images/tron.jpg'
      },
      {
        titulo: 'Sesión 9',
        texto: '"Session 9" es una película de terror psicológico estadounidense de 2001 dirigida por Brad Anderson y protagonizada por David Caruso, Peter Mullan, Stephen Gevedon, Paul Guilfoyle, Josh Lucas y Brendan Sexton III. El argumento se centra en un grupo de profesionales desmontadores de asbesto que son contratados para la retirada de este material en una institución mental abandonada y gira en torno a una paciente con un oscuro pasado registrado mediante sesiones de hipnoterapia grabadas. El edificio en cuestión es el Hospital Mental de Danvers de Massachusetts, considerado monumento histórico nacional y que fue parcialmente derribado en 2006.',
        autor: 'Carmelo Gómez',
        categoria: 'Terror',
        fecha: '18/08/2021',
        imagen: '../../assets/images/sesion9.jpg'
      },
      {
        titulo: 'The terminator',
        texto: '"The Terminator" es una película estadounidense de ciencia ficción y acción de octubre de 1984, dirigida por James Cameron, coescrita entre Cameron, Gale Anne Hurd y William Wisher Jr. y protagonizada por Arnold Schwarzenegger, Linda Hamilton y Michael Biehn. El filme fue producido por Hemdale Film Corporation y distribuido por Orion Pictures. En ella Schwarzenegger interpreta al Terminator, un ciborg asesino enviado a través del tiempo desde el año 2029 a 1984 para asesinar a Sarah Connor, interpretada por Linda Hamilton. Kyle Reese, interpretado por Michael Biehn, es un soldado que ha sido también enviado desde el futuro con la misión de proteger a Sarah. Fue un gran éxito de taquilla que inició una franquicia que consta de varias secuelas, una serie de televisión, cómics, novelas y videojuegos.',
        autor: 'Javier Ocaña',
        categoria: 'Ciencia-ficción',
        fecha: '18/06/2021',
        imagen: '../../assets/images/theterminator.jpg',
      },
    ];
  }

  // Método que muestra todos los post almacenados
  getAll(): Post[] {
    return this.arrPosts;
  }

  // Método que muestra las críticas por category
  getByCategory(pCategoriay: string) {
    return this.arrPosts.filter(post => post.categoria === pCategoriay);
  }

  // Método que recibe un post y lo inserte dentro del array
  create(pPost: Post) {
    this.arrPosts.push(pPost);
  }

}
