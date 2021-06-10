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
  cantidad = 20;
  page = 1;
  title = 'pokemon-ag';
  pokemones: Pokemon[] = [];

  constructor(private appServie: AppService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(cantidad: number = 20, page: number = 1) {
    this.appServie.getAll(cantidad, page).subscribe((res) => {
      this.pokemones.push(...res);
    });
  }

  loadMore() {
    this.page++;
    this.findAll(this.cantidad, this.page);
  }
}
