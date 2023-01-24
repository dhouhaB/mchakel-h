import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-sandwitch',
  templateUrl: './sandwitch.page.html',
  styleUrls: ['./sandwitch.page.scss'],
})
export class SandwitchPage implements OnInit {
  /*list=[

{picUrl:"C:\Users\Doh\Downloads\Nouveau dossier (3)\menu-kilo-mchakal-master\src\assets\icon\sandwich.png",
itName:"كبدة اسكندرانى",
itPrice:13 },
{picUrl:"",
itName:"كبده مقليه بالرده",
itPrice:14 },
{picUrl:"",
itName:"سجق اسكندرانى",
itPrice:16 },
{picUrl:"",
itName:"كفتة",
itPrice:16 },
{picUrl:"",
itName:"كباب",
itPrice:18 },
{picUrl:"",
itName:"طرب",
itPrice:18 },
{picUrl:"",
itName:"شيش طاووك",
itPrice:14 },
{picUrl:"",
itName:"فاهيتا",
itPrice:15 }
 ]*/

 cart=[];
  products =[];
  totale=0;
  public variablec:any;



  cartItemCount:BehaviorSubject<number>


  constructor(
    private cartService:CartService,private modalCtrl:ModalController

  ) { }

  ngOnInit() {
this.variablec=this.cartService.addProduct(this.products);
this.products = this.cartService.getProducts();
this.cart =this.cartService.getCart();
this.cartItemCount = this.cartService.getCartItemCount();

  }
  addCart(product)
  {

this.cartService.addProduct(product);
  }

}
