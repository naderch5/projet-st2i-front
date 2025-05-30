import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFactureComponent } from './update-facture.component';

describe('UpdateFactureComponent', () => {
  let component: UpdateFactureComponent;
  let fixture: ComponentFixture<UpdateFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFactureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
