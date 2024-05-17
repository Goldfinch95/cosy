import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersProfileViewComponent } from './users-profile-view.component';

describe('UsersProfileViewComponent', () => {
  let component: UsersProfileViewComponent;
  let fixture: ComponentFixture<UsersProfileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersProfileViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
