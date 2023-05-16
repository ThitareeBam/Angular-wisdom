import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexapiComponent } from './indexapi.component';

describe('IndexapiComponent', () => {
  let component: IndexapiComponent;
  let fixture: ComponentFixture<IndexapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
