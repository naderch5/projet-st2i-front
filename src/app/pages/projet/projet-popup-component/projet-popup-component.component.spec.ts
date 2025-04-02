import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetPopupComponentComponent } from './projet-popup-component.component';

describe('ProjetPopupComponentComponent', () => {
  let component: ProjetPopupComponentComponent;
  let fixture: ComponentFixture<ProjetPopupComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetPopupComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetPopupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
