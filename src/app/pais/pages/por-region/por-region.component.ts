import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }
  `

  ]
})
export class PorRegionComponent implements OnInit {
  public regiones: string[]=["africa", "americas", "asia", "europe", "oceania"];
  public regionActiva: string="";
  public paises: Pais[]=[];
  constructor(private service: PaisService) { }

  ngOnInit(): void {
  }
  activarRegion(region: string){
    if(region===this.regionActiva) return;
    this.regionActiva=region;
    this.paises=[];
    this.service.buscarRegion(this.regionActiva)
    .subscribe(res=> {this.paises=res
      
    })
  }
}
