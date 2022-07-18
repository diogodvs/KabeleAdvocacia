import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirconsumidorComponent } from './dirconsumidor.component';

describe('DirconsumidorComponent', () => {
  let component: DirconsumidorComponent;
  let fixture: ComponentFixture<DirconsumidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirconsumidorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirconsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
