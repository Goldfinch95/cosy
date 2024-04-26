import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePublicationsComponent } from './profile-publications.component';

describe('ProfilePublicationsComponent', () => {
  let component: ProfilePublicationsComponent;
  let fixture: ComponentFixture<ProfilePublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilePublicationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilePublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
