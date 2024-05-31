import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Img3Component } from './img3.component';

describe('Img3Component', () => {
  let component: Img3Component;
  let fixture: ComponentFixture<Img3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Img3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Img3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
