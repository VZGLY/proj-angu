import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personnes } from './personnes';

describe('Personnes', () => {
  let component: Personnes;
  let fixture: ComponentFixture<Personnes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Personnes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Personnes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
