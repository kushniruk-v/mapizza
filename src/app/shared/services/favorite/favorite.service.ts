import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favoriteTovary: string[] = [];

  addToFavorites(tovar: string): void {
    this.favoriteTovary.push(tovar);
  }

  getFavorites(): string[] {
    return this.favoriteTovary;
  }
  constructor() { }
}
