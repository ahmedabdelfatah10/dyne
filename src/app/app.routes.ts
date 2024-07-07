import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'restaurants',
    loadComponent: () =>
      import('./routes/restaurants/restaurants/restaurants.component').then((c) => c.RestaurantsComponent),
  },
  {
    path: 'menus/:id/:name',
    loadComponent: () => import('./routes/menus/menus/menus.component').then((c) => c.MenusComponent),
  },
  {
    path: 'items/:id/:menuname/:name',
    loadComponent: () => import('./routes/items/items/items.component').then((c) => c.ItemsComponent),
  },
  {
    path: 'cart',
    loadComponent: () => import('./routes/cart/cart/cart.component').then((c) => c.CartComponent),
  },
  {
    path: '**',
    redirectTo: 'restaurants',
  },
];
