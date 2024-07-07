import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  private restaurant = signal<any>([])

  constructor(private httpClient: HttpClient) {
    let restaurant = JSON.parse(localStorage.getItem('restaurant') || '{}')
    if (restaurant) {
      this.restaurant.set(JSON.parse(localStorage.getItem('restaurant') as string))
    }
  }


  setMenus(restaurant: any) {
    localStorage.setItem('restaurant', JSON.stringify(restaurant))
    this.restaurant.set(restaurant)
  }

  getRestaurant() {
    return this.restaurant().menus;
  }

  getResturantId(){
    return this.restaurant().id
  }

  clearRestaurant(){
    this.restaurant.set([])
    localStorage.removeItem('restaurant')

  }
}
