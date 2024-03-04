import { Component } from '@angular/core';
import { ICareerResponse } from 'src/app/shared/interfaces/career/career-interface';
import { Subscription } from 'rxjs';
import { CareerService } from 'src/app/shared/services/career/career.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent {
  userCareer: Array<ICareerResponse> = [];
  private eventSubscription!: Subscription;
  constructor(
    private careerService: CareerService
  ) // private activatedRoute: ActivatedRoute,
  // private router: Router
  {}
  ngOnInit(): void {
    this.getCareer();
  }
  getCareer(): void {
    this.careerService.getAll().subscribe((data) => {
      this.userCareer = data;
    });
  }
}
