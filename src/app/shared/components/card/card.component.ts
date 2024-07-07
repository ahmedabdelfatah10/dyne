import { CommonModule } from '@angular/common';
import { Component, Signal, computed, effect, input } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,MatChipsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  restaurant = input.required<any>()
  url:Signal<string>=computed(()=>{
    if(!this.restaurant().restaurantBackground){
      return `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.8)),url('${this.restaurant().background
      }') no-repeat center center / cover`;
    }else{
      return `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.8)),url('${this.restaurant().restaurantBackground
      }') no-repeat center center / cover`;
    }
  })
}

