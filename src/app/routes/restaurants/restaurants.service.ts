import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private httpClient:HttpClient ) { }



  getRestaurants(){
   return this.httpClient.get('https://api.mocki.io/v2/aqprm7yv/restaurants')
  }
}
