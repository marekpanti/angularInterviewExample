import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponent } from './dynamic.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('DynamicComponent', () => {
  let component: DynamicComponent;
  let fixture: ComponentFixture<DynamicComponent>;
  let store: MockStore;
  const initialState = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicComponent],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
