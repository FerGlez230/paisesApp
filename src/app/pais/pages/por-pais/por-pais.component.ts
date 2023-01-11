import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
      cursor:pointer;
    }
  `

  ]
})
export class PorPaisComponent {
  public termino: string ="";
  public hayError: boolean= false;
  public mostrarSugerencias: boolean= false;
  public paises: Pais[]=[];
  public paisesSugeridos: Pais[]=[];
  constructor(private service: PaisService) { }

  public buscar(termino: string){
    this.hayError=false;
    this.termino=termino;
    console.log(this.termino)
    this.service.buscarPais(this.termino)
      .subscribe(
        paises=> {console.log(paises)
        this.paises=paises},
        error => {
          this.hayError=true
          this.paises=[];
        })
        
  }

  public sugerencias(termino: string){
    this.hayError=false;
    this.termino=termino;
    this.mostrarSugerencias=true;
    this.service.buscarPais(termino).subscribe(
      paises=>this.paisesSugeridos=paises.splice(0,5),
      (error)=>this.paisesSugeridos=[]
    );
  }
 
}

