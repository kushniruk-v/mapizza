import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITovaryResponse } from 'src/app/shared/interfaces/tovary/tovary-interface';
import { OrderService } from 'src/app/shared/order/order.service';
import { TovaryService } from 'src/app/shared/services/tovary/tovary.service';

@Component({
  selector: 'app-tovary-info',
  templateUrl: './tovary-info.component.html',
  styleUrls: ['./tovary-info.component.scss'],
})
export class TovaryInfoComponent {
  public currentTovary!: ITovaryResponse;
  public userTovary: Array<ITovaryResponse> = [];
  constructor(
    private tovaryServis: TovaryService,
    private activatedRoute: ActivatedRoute,

    private orderService: OrderService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response) => {
      this.currentTovary = response['tovaryInfo'];
    });
    this.getTovary();
  }
  loadTovary(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.tovaryServis.getOne(id).subscribe((data) => {
      this.currentTovary = data;
    });
  }
  getTovary(): void {
    this.tovaryServis.getAll().subscribe((data) => {
      this.userTovary = data;
    });
  }
  tovaryCount(tovary: ITovaryResponse, value: boolean): void {
    if (value) {
      ++tovary.count;
    } else if (!value && tovary.count > 1) {
      --tovary.count;
    }
  }
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
    } else {
      basket.push(tovar);
    }
    localStorage.setItem('basket', JSON.stringify(basket));
    tovar.count = 1;
    this.orderService.changeBasket.next(true);
  }
}
