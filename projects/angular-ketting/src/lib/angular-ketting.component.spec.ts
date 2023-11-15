import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularKettingComponent } from './angular-ketting.component';

describe('AngularKettingComponent', () => {
  let component: AngularKettingComponent;
  let fixture: ComponentFixture<AngularKettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularKettingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularKettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
