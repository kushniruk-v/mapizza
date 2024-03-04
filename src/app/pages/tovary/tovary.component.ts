import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ITovaryResponse } from 'src/app/shared/interfaces/tovary/tovary-interface';
import { Subscription } from 'rxjs';
import { TovaryService } from 'src/app/shared/services/tovary/tovary.service';
import { ICategoryResponse } from 'src/app/shared/interfaces/category/category-interface';
import { OrderService } from 'src/app/shared/order/order.service';
import { FavoriteService } from 'src/app/shared/services/favorite/favorite.service';
@Component({
  selector: 'app-tovary',
  templateUrl: './tovary.component.html',
  styleUrls: ['./tovary.component.scss'],
})
export class TovaryComponent {
  public userTovary: Array<ITovaryResponse> = [];
  public isOpen = false;
  public isModal = false;
  public isActive = false;
  private eventSubscription!: Subscription;

  constructor(
    private TovaryService: TovaryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private favoriteService: FavoriteService
  ) {
    this.eventSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.loadTovary();
      }
    });
  }
  ngOnInit(): void {}

  loadTovary(): void {
    const categoryName = this.activatedRoute.snapshot.paramMap.get(
      'category'
    ) as string;
    this.TovaryService.getAllByCategory(categoryName).subscribe((data) => {
      this.userTovary = data;
    });
  }
  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  openReadMore(): void {
    this.isOpen = !this.isOpen;
  }

  tovaryCount(tovary: ITovaryResponse, value: boolean): void {
    if (value) {
      ++tovary.count;
    } else if (!value && tovary.count > 1) {
      --tovary.count;
    }
  }

  // addToFavorites(tovar: ITovaryResponse): void {
  //   let favorite: Array<ITovaryResponse> = [];
  //   if(localStorage.length > 0 && localStorage.getItem('favorite')){
  //     favorite = JSON.parse(localStorage.getItem('favorite') as string);

  //     if(favorite.some(prod => prod.id === tovar.id)){
  //       const index = favorite.findIndex(prod => prod.id === tovar.id);
  //       favorite[index].count += tovar.count;

  //     } else {
  //       favorite.push(tovar);

  //     }

  //   }
  //   localStorage.setItem('favorite', JSON.stringify(favorite));
  //   tovar .count = 1;
  //   this.orderService.changeBasket.next(true);

  // }

  addToBasket(tovar: ITovaryResponse): void {
    let basket: Array<ITovaryResponse> = [];
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      basket = JSON.parse(localStorage.getItem('basket') as string);
      if (basket.some((prod) => prod.id === tovar.id)) {
        const index = basket.findIndex((prod) => prod.id === tovar.id);
        basket[index].count += tovar.count;
      } else {
        basket.push(tovar);
      }
    }
    localStorage.setItem('basket', JSON.stringify(basket));
    tovar.count = 1;
    this.orderService.changeBasket.next(true);
  }
}
