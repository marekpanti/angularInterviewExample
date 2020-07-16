import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenComponent } from './template-driven.component';
import { FormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('TemplateDrivenComponent', () => {
  let component: TemplateDrivenComponent;
  let fixture: ComponentFixture<TemplateDrivenComponent>;
  let store: MockStore;
  const initialState = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateDrivenComponent],
      imports: [FormsModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
