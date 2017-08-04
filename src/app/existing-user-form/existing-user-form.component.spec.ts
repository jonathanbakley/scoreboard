import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingUserFormComponent } from './existing-user-form.component';

describe('ExistingUserFormComponent', () => {
  let component: ExistingUserFormComponent;
  let fixture: ComponentFixture<ExistingUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
