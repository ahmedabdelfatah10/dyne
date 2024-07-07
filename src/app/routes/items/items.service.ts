import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  
  constructor(private httpClient: HttpClient) {}

  getMenus(menuId: string) {
    return this.httpClient.get(`https://api.mocki.io/v2/aqprm7yv/menus/${menuId}`)
  }
}
