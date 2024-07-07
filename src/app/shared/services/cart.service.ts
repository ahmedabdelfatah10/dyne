import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { MenusService } from './menus.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cart = signal<any>([]);

  constructor(
    private http: HttpClient,
    private menu: MenusService,
  ) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cart.length) {
      this.cart.set(JSON.parse(localStorage.getItem('cart') as string));
    } else {
      this.cart.set([]);
    }
  }

  getCart() {
    return this.cart();
  }

  addToCart(item: any) {
    let items = this.cart();
    let doesExist = items.find((i: any) => i.itemId === item.id);
    if (doesExist) {
      items = items.filter((i: any) => i.itemId !== item.id);
      items.push({
        itemId: item.id,
        quantity: doesExist.quantity + 1,
        price: item.price,
        thumbnail: item.thumbnail,
        name: item.name,
      });
      this.cart.set(items);
    } else {
      items.push({ itemId: item.id, quantity: 1, price: item.price, thumbnail: item.thumbnail, name: item.name });
      this.cart.set(items);
    }
    localStorage.setItem('cart', JSON.stringify(this.cart()));
  }

  removeFromCart(item: any) {
    let items = this.cart();
    let doesExist = items.find((i: any) => i.itemId === item.itemId);
    if (doesExist.quantity === 1) {
      items = items.filter((i: any) => i.itemId !== item.id);
      this.cart.set(items);
    } else {
      items = items.filter((i: any) => i.itemId !== item.itemId);
      items.push({
        itemId: item.id,
        quantity: doesExist.quantity - 1,
        price: item.price,
        thumbnail: item.thumbnail,
        name: item.name,
      });
      this.cart.set(items);
    }
    localStorage.setItem('cart', JSON.stringify(this.cart()));
  }

  order(id: number, order: any[]) {
    return this.http.post(`https://api.mocki.io/v2/aqprm7yv/order/${id}`, order);
  }

  clearCart() {
    this.cart.set([]);
    localStorage.removeItem('cart');
  }
}
