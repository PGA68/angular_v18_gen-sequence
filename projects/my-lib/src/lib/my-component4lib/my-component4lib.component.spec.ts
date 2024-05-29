import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponent4libComponent } from './my-component4lib.component';

describe('MyComponent4libComponent', () => {
  let component: MyComponent4libComponent;
  let fixture: ComponentFixture<MyComponent4libComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponent4libComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyComponent4libComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
