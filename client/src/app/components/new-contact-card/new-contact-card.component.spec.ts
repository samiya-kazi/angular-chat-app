import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContactCardComponent } from './new-contact-card.component';

describe('NewContactCardComponent', () => {
  let component: NewContactCardComponent;
  let fixture: ComponentFixture<NewContactCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewContactCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewContactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
