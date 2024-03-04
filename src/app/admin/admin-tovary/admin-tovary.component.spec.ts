import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTovaryComponent } from './admin-tovary.component';

describe('AdminTovaryComponent', () => {
  let component: AdminTovaryComponent;
  let fixture: ComponentFixture<AdminTovaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTovaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTovaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
