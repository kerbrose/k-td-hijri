import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KtdhijriComponent } from './ktdhijri.component';

describe('KtdhijriComponent', () => {
  let component: KtdhijriComponent;
  let fixture: ComponentFixture<KtdhijriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KtdhijriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KtdhijriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
