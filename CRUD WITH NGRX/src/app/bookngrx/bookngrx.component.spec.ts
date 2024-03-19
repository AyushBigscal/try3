import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookngrxComponent } from './bookngrx.component';

describe('BookngrxComponent', () => {
  let component: BookngrxComponent;
  let fixture: ComponentFixture<BookngrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookngrxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookngrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
