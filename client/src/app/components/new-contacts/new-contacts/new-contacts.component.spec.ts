import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContactsComponent } from './new-contacts.component';

describe('NewContactsComponent', () => {
  let component: NewContactsComponent;
  let fixture: ComponentFixture<NewContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
