import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Img5Component } from './img5.component';

describe('Img5Component', () => {
  let component: Img5Component;
  let fixture: ComponentFixture<Img5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Img5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Img5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
