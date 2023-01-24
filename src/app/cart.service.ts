import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product 
{
  id:number;
  name:string;
  price:number;
  
  //image :string;
}


@Injectable({
  providedIn: 'root'
})
export class CartService {
  public totale:0;

  data:Product[]=[
    {id:0,name:'pizza',price:8.99},
    {id:1,name:'spagetti',price:1.99},
    {id:2,name:'cornet ',price:1.99},
  ]
private cart=[];

private cartItemCount= new BehaviorSubject(0);


  constructor() { }

getProducts (){
  return this.data;
}
getCart (){
  return this.cart;
}
getCartItemCount()
{
 return this.cartItemCount;
}
addProduct (product)
{
  let added=false;
  for(let item of this.cart)
  {
    if (item.id===product.id)
    {
  item.price+= product.price;
  
      
      added =true ;
      break;

    }
  }
  if(!added)
  {
    this.cart.push(product);
  
  this.cartItemCount.next(this.cartItemCount.value+1);


}





}
}
