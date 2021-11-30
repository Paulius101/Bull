import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningEffectComponent } from './opening-effect.component';

describe('OpeningEffectComponent', () => {
  let component: OpeningEffectComponent;
  let fixture: ComponentFixture<OpeningEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpeningEffectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
