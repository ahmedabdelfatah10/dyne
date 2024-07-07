import { Component, OnInit, signal } from '@angular/core';
import { RestaurantsService } from '../../../shared/services/restaurants.service';
import { CardComponent } from '../../../shared/components/card/card.component';
import { RouterLink } from '@angular/router';
import { MenusService } from '../../../shared/services/menus.service';
import { CartItemComponent } from '../../../shared/components/cart-item/cart-item.component';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [CardComponent, RouterLink],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.scss',
})
export class RestaurantsComponent implements OnInit {
  Restaurants = signal<any>([]);

  constructor(
    private restaurantsService: RestaurantsService,
    private menu: MenusService,
  ) {}

  ngOnInit(): void {
    this.restaurantsService.getRestaurants().subscribe((res) => {
      this.Restaurants.set(res);
    });
  }

  setMenus(restaurant: any) {
    this.menu.setMenus(restaurant);
  }
}
