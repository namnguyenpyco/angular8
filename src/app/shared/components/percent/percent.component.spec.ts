import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PercentComponent } from './percent.component';


describe('Percent Component', () => {
  let component: PercentComponent;
  let fixture: ComponentFixture<PercentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create input text', () => {
    expect(component).toBeTruthy();
  });
});
