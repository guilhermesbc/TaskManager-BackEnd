import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTaskmgrComponent } from './show-taskmgr.component';

describe('ShowTaskmgrComponent', () => {
  let component: ShowTaskmgrComponent;
  let fixture: ComponentFixture<ShowTaskmgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowTaskmgrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowTaskmgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
