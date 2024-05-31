import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Img6Component } from './img6.component';

describe('Img6Component', () => {
  let component: Img6Component;
  let fixture: ComponentFixture<Img6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Img6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Img6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
