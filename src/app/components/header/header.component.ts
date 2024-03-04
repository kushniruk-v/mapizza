import { Component } from '@angular/core';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { BasketDialogComponent } from '../basket-dialog/basket-dialog.component';
import { AccountService } from 'src/app/shared/services/account/account.service';
import { OrderService } from 'src/app/shared/order/order.service';
import { ITovaryResponse } from 'src/app/shared/interfaces/tovary/tovary-interface';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent {
 
public basket:Array<ITovaryResponse>=[];
  public total = 0;
  public countTovary =0;
  constructor(

    public dialog: MatDialog, 
    private accountService:AccountService,
    private orderServise:OrderService
  ) {}
  ngOnInit(): void {
    this.loadBasket();
    this.updateBasket();
  }

  openLoginDialog(): void {
    this.dialog
      .open(AuthDialogComponent, {
        backdropClass: 'dialog-back',
        panelClass: 'auth-dialog',
        autoFocus: false,
      })
      .afterClosed()
      .subscribe((result) => {
        console.log(result);
      });
  }
  openBasketDialog():void{
    this.dialog.open(BasketDialogComponent, {
      backdropClass: 'dialog-back-2',
      panelClass: 'basket-dialog' ,
  
      position: { right: '20px', top: '15px' },
      
    });

  }
 loadBasket():void{
  if(localStorage.length>0 && localStorage.getItem('basket')){
    this.basket=JSON.parse(localStorage.getItem('basket') as string);
  }
  this.getTotalPrice();
  this.getTotalCount();
 }

 getTotalPrice():void{
  this.total=this.basket.reduce(
    (total:number, tovar:ITovaryResponse)=>
    total+tovar.count*tovar.price,0
  );
 }
 getTotalCount():void{
  this.countTovary=this.basket.reduce((
    total:number, count:ITovaryResponse
  )=>total+count.count,0)
 }
 updateBasket(): void {
  this.orderServise.changeBasket.subscribe(() => {
    this.loadBasket();
  });
}
}

