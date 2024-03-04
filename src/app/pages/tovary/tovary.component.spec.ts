import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TovaryComponent } from './tovary.component';

describe('TovaryComponent', () => {
  let component: TovaryComponent;
  let fixture: ComponentFixture<TovaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TovaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TovaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
