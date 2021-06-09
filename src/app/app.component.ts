import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

interface Pokemon {
  name: string;
  url: string;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'pokemon-ag';
  pokemones: Pokemon[] = [
    {
      name: 'Pikachu',
      url: 'https://pokemon',
      image: 'https://pokeres.bastionbot.org/images/pokemon/1.png',
    },
    {
      name: 'Pikachu',
      url: 'https://pokemon',
      image: 'https://pokeres.bastionbot.org/images/pokemon/1.png',
    },
    {
      name: 'Pikachu',
      url: 'https://pokemon',
      image: 'https://pokeres.bastionbot.org/images/pokemon/1.png',
    },
    {
      name: 'Pikachu',
      url: 'https://pokemon',
      image: 'https://pokeres.bastionbot.org/images/pokemon/1.png',
    },
    {
      name: 'Pikachu',
      url: 'https://pokemon',
      image: 'https://pokeres.bastionbot.org/images/pokemon/1.png',
    },
  ];

  constructor(private appServie: AppService){}
  
  ngOnInit(): void {
    this.appServie.getAll().subscribe(res => {
      this.pokemones = res;
    })
  }
}
