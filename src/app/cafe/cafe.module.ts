import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCafeComponent } from './listar-cafe/listar-cafe.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ ListarCafeComponent ],
  exports: [ ListarCafeComponent ]
})
export class CafeModule { }
