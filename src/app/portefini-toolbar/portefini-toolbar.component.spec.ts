import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortefiniToolbarComponent } from './portefini-toolbar.component';

describe('PortefiniToolbarComponent', () => {
  let component: PortefiniToolbarComponent;
  let fixture: ComponentFixture<PortefiniToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortefiniToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortefiniToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
