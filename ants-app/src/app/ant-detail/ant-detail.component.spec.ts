import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntDetailComponent } from './ant-detail.component';

describe('AntDetailComponent', () => {
  let component: AntDetailComponent;
  let fixture: ComponentFixture<AntDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
