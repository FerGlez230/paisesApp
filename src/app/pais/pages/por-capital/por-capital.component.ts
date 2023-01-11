import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  constructor(private service: PaisService) { }
  public hayError: boolean=false;
  public termino: string= "";
  public capitales: Pais[]=[];
  ngOnInit(): void {
  }
  public buscar(termino: string){
    this.hayError=false;
    this.termino=termino;
    console.log(this.termino)
    this.service.buscarCapital(this.termino)
      .subscribe(
        paises=> {console.log(paises)
        this.capitales=paises},
        error => {
          this.hayError=true
          this.capitales=[];
        })
        
  }
}
