import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseTabComponent } from './enterprise-tab.component';

describe('EnterpriseTabComponent', () => {
  let component: EnterpriseTabComponent;
  let fixture: ComponentFixture<EnterpriseTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
