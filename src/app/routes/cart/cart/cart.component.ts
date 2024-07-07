import { Component, computed } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { Location } from '@angular/common';
import { MenusService } from '../../../shared/services/menus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems = computed(() => {
    return this.cartService.cart();
  });
  price = computed(() => {
    let itemsPrice = 0;
    for (let item of this.cartItems()) {
      itemsPrice = itemsPrice + item.quantity * item.price;
    }
    return itemsPrice;
  });

  constructor(
    protected cartService: CartService,
    private location: Location,
    private menu: MenusService,
    private router: Router,
  ) {}

  goBack() {
    this.location.back();
  }

  removeFromCart(cartItem: any) {
    this.cartService.removeFromCart(cartItem);
  }

  order() {
    let id = this.menu.getResturantId();
    let order = [];
    for (let cart of this.cartItems()) {
      order.push({ itemId: cart.itemId, quantity: cart.quantity });
    }
    this.cartService.order(id, order).subscribe({
      next: (res) => {
        this.menu.clearRestaurant();
        this.cartService.clearCart();
        this.router.navigateByUrl('/restaurants');
      },
      error: () => {
        this.menu.clearRestaurant();
        this.cartService.clearCart();
        this.router.navigateByUrl('/restaurants');
      },
    });
  }
}
