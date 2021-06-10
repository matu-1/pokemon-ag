import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  static url: string = 'https://pokeapi.co/api/v2/pokemon';
  static urlImage = 'https://pokeres.bastionbot.org/images/pokemon/';
  constructor(private http: HttpClient) {}

  private getId(url: string) {
    const valuesArray = url.split('/');
    return valuesArray[valuesArray.length - 2];
  }

  getAll(cantidad: number, page: number) {
    return this.http.get(AppService.url + '?limit=' + cantidad + '&offset=' + ((page - 1) * cantidad)).pipe(
      map((res: any) => {
        return res.results.map((item: any) => {
          return {
            ...item,
            image: `${AppService.urlImage}${this.getId(item.url)}.png`,
          };
        });
      })
    );
  }
}
