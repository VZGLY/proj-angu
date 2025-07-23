import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTableau } from './parent-tableau';

describe('ParentTableau', () => {
  let component: ParentTableau;
  let fixture: ComponentFixture<ParentTableau>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentTableau]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentTableau);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
