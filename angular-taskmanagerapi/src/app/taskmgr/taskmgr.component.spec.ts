import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskmgrComponent } from './taskmgr.component';

describe('TaskmgrComponent', () => {
  let component: TaskmgrComponent;
  let fixture: ComponentFixture<TaskmgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskmgrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskmgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
