import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirtrabalhistaComponent } from './dirtrabalhista.component';

describe('DirtrabalhistaComponent', () => {
  let component: DirtrabalhistaComponent;
  let fixture: ComponentFixture<DirtrabalhistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirtrabalhistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirtrabalhistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
