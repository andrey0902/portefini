import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortefiniHeaderComponent } from './portefini-header.component';

describe('PortefiniHeaderComponent', () => {
  let component: PortefiniHeaderComponent;
  let fixture: ComponentFixture<PortefiniHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortefiniHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortefiniHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
