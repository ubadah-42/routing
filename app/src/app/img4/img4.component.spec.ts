import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Img4Component } from './img4.component';

describe('Img4Component', () => {
  let component: Img4Component;
  let fixture: ComponentFixture<Img4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Img4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Img4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
