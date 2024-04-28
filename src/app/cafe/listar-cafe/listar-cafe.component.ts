import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-listar-cafe',
  templateUrl: './listar-cafe.component.html',
  styleUrls: ['./listar-cafe.component.css']
})
export class ListarCafeComponent implements OnInit {
  cafes: Array<Cafe> = [];
  totales: {[key: string]: number} = {};

  constructor(private cafeService: CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;

      for (let cafe of this.cafes) {
        let tipo: string = cafe.tipo;

        this.totales[tipo] = (this.totales[tipo] ?? 0) + 1;
      }
    });
  }

  ngOnInit(): void {
    this.getCafes();
  }

}
