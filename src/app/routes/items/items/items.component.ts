import { Component, OnInit, Signal, computed,input, signal } from '@angular/core';
import { ItemsService } from '../items.service';
import { CartItemComponent } from '../../../shared/components/cart-item/cart-item.component';
import { Location } from '@angular/common';
import { CartService } from '../../cart/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CartItemComponent,RouterLink],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent implements OnInit {

  id = input.required<string>()
  name = input.required<string>()
  menuname=input.required<string>()
  itemsInMenu= signal<any>('')




  constructor(private items: ItemsService,private location:Location,protected cart:CartService) {


  }

  ngOnInit(): void {
    this.items.getMenus(this.id()).subscribe((res)=>{
      this.itemsInMenu.set(res)
      })
  }

  goBack(){
    this.location.back();
  }

  addToCart(event:any){
    this.cart.addToCart(event)
  }

}
