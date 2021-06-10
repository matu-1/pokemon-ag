import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppService } from './app.service';
import { Pokemon } from './pokemon';

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
  @ViewChild('container')
  container!: ElementRef<HTMLElement>;

  constructor(private appServie: AppService) {}

  ngOnInit(): void {
    this.findAll();
  }

  async findAll(cantidad: number = 20, page: number = 1) {
    const res = await this.appServie.getAll(cantidad, page).toPromise();
    this.pokemones.push(...res);
  }

  async loadMore() {
    this.page++;
    await this.findAll(this.cantidad, this.page);
    setTimeout(() => {
      window.scroll({
        top: window.pageYOffset + 300,
        behavior: 'smooth',
      });
    }, 500);
  }

  offsetEnd(element: HTMLElement) {
    // this.container.nativeElement.scrollIntoView()
    element.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }
}
