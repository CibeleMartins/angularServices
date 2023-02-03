import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSnippetComponent } from './new-snippet.component';

describe('NewSnippetComponent', () => {
  let component: NewSnippetComponent;
  let fixture: ComponentFixture<NewSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSnippetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
