import { Component, Signal, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  cartItem=input.required<any>()
  addItem=output()
  url:Signal<string>=computed(()=>{
    if(!this.cartItem().availability){
      return `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.4)),url('${this.cartItem().thumbnail
      }') no-repeat center center / cover`;
    }else{
      return `url('${this.cartItem().thumbnail
      }') no-repeat center center / cover`;
    }
  })

  addToCart(){
   this.addItem.emit(this.cartItem())
  }


}
