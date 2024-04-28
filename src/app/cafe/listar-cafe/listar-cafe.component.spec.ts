/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListarCafeComponent } from './listar-cafe.component';
import { HttpClientModule } from '@angular/common/http';
import { CafeService } from '../cafe.service';
import { Cafe } from '../cafe';
import { faker } from '@faker-js/faker';

describe('ListarCafeComponent', () => {
  let component: ListarCafeComponent;
  let fixture: ComponentFixture<ListarCafeComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ ListarCafeComponent ],
      providers: [ CafeService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCafeComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const cafe = new Cafe(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.image.url()
      );
      component.cafes.push(cafe);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe tener 1 <tr> en <thead>', () => {
    expect(debug.queryAll(By.css('table thead tr')).length).toBe(1)
  });

  it('debe tener 3 <tr> en <tbody>', () => {
    expect(debug.queryAll(By.css('table tbody tr')).length).toBe(3)
  });

  it('debe tener un total de 4 <tr> en <table>', () => {
    expect(debug.queryAll(By.css('table tr')).length).toBe(4)
  });
});