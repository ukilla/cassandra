import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtakmicaComponent } from './utakmica.component';

describe('UtakmicaComponent', () => {
  let component: UtakmicaComponent;
  let fixture: ComponentFixture<UtakmicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtakmicaComponent]
    });
    fixture = TestBed.createComponent(UtakmicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
