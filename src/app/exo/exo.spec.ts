import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo } from './exo';

describe('Exo', () => {
  let component: Exo;
  let fixture: ComponentFixture<Exo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
