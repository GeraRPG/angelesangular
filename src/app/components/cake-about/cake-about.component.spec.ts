import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeAboutComponent } from './cake-about.component';

describe('CakeAboutComponent', () => {
  let component: CakeAboutComponent;
  let fixture: ComponentFixture<CakeAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
