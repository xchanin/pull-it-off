import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniLeftMenuComponent } from './mini-left-menu.component';

describe('LeftMenuComponent', () => {
  let component: MiniLeftMenuComponent;
  let fixture: ComponentFixture<MiniLeftMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniLeftMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
