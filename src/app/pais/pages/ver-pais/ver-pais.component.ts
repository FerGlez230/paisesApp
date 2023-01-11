import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  public pais!: Pais; //puede ser null
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: PaisService) { }

  ngOnInit(): void {
   /* this.activatedRoute.params
    .subscribe(({id})=>{
      console.log(id)
      this.service.buscarId(id)
      .subscribe(pais=>{
        console.log(pais)
      })
    })*/ //IGUAL A LO DE ABAJO
    
    /* swicth map es una funciòn de alto nivel
    Una función de alto nivel es una 
    función que, o bien devuelve otra 
    función, o acepta una función como 
    parámetro.

    Recibe un observablecomo parametro y
    regresa un observable (retorna las 
      notificaciones de un Observable 
      interno)
    */
    this.activatedRoute.params
    .pipe(
      switchMap((params)=>this.service.buscarId(params.id)),
      tap(console.log)
    )
    .subscribe((pais)=>{
      this.pais=pais[0]
      
    })
  
  }


}
