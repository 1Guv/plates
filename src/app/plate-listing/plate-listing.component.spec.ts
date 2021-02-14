import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateListingComponent } from './plate-listing.component';

describe('PlateListingComponent', () => {
  let component: PlateListingComponent;
  let fixture: ComponentFixture<PlateListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlateListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlateListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
