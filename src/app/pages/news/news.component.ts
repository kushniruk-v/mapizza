import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INewsResponse } from 'src/app/shared/interfaces/news/news-interface';
import { Subscription } from 'rxjs';
import { NewsService } from 'src/app/shared/services/news/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
userNews:Array<INewsResponse>=[];
private eventSubscription!: Subscription;
constructor(
  private newsService:NewsService,
  private activatedRoute: ActivatedRoute,
 
){}
ngOnInit(): void {

  this.getNews()
}
getNews():void{
  this.newsService.getAll().subscribe(data=>{
    this.userNews=data;
  })
}
// ngOnDestroy(): void {
//   this.eventSubscription.unsubscribe();
// }
}
