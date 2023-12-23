import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTaskmgrComponent } from './add-edit-taskmgr.component';

describe('AddEditTaskmgrComponent', () => {
  let component: AddEditTaskmgrComponent;
  let fixture: ComponentFixture<AddEditTaskmgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditTaskmgrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditTaskmgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
