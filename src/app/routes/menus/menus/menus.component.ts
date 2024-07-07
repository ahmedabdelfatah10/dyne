import { Component, computed, input } from '@angular/core';
import { MenusService } from '../menus.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menus',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.scss'
})
export class MenusComponent {

  id = input.required<string>()
  name = input.required<string>()
  menus = computed(() => {
    return this.menuService.getRestaurant()
  })

  constructor(private menuService: MenusService) {}
  

  getUrl(menu: any) {
    return `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.8)),url('${menu.background
      }') no-repeat center center / cover`;
  }


}
