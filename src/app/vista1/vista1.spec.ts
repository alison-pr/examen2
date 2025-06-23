import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista1 } from './vista1';

describe('Vista1', () => {
  let component: Vista1;
  let fixture: ComponentFixture<Vista1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vista1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vista1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
