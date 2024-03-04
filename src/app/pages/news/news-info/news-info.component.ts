import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INewsResponse } from 'src/app/shared/interfaces/news/news-interface';
import { NewsService } from 'src/app/shared/services/news/news.service';

@Component({
  selector: 'app-news-info',
  templateUrl: './news-info.component.html',
  styleUrls: ['./news-info.component.scss'],
})
export class NewsInfoComponent {
  public currentNews!: INewsResponse;
  constructor(
    // private newsServis: NewsService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response) => {
      this.currentNews = response['newsInfo'];
    });
  }
}
