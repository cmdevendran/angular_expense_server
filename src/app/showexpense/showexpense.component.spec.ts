import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowexpenseComponent } from './showexpense.component';

describe('ShowexpenseComponent', () => {
  let component: ShowexpenseComponent;
  let fixture: ComponentFixture<ShowexpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowexpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
