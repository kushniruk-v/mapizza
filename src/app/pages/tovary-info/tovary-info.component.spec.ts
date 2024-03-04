import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TovaryInfoComponent } from './tovary-info.component';

describe('TovaryInfoComponent', () => {
  let component: TovaryInfoComponent;
  let fixture: ComponentFixture<TovaryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TovaryInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TovaryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
