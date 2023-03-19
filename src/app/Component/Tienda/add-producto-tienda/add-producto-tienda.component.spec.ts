import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductoTiendaComponent } from './add-producto-tienda.component';

describe('AddProductoTiendaComponent', () => {
  let component: AddProductoTiendaComponent;
  let fixture: ComponentFixture<AddProductoTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductoTiendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductoTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
