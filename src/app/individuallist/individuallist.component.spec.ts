import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividuallistComponent } from './individuallist.component';

describe('IndividuallistComponent', () => {
  let component: IndividuallistComponent;
  let fixture: ComponentFixture<IndividuallistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividuallistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividuallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
