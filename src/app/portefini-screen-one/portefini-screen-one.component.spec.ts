import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortefiniScreenOneComponent } from './portefini-screen-one.component';

describe('PortefiniScreenOneComponent', () => {
  let component: PortefiniScreenOneComponent;
  let fixture: ComponentFixture<PortefiniScreenOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortefiniScreenOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortefiniScreenOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
