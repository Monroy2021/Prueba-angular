import { Component, OnInit } from '@angular/core';
import { cartas, CartasService } from '../services/cartas.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit { 

  cartas:cartas | undefined;

  constructor( private cartasService: CartasService ) { }

  ngOnInit(): void { 
    this.getCartas();
  }  

  getCartas(){
    this.cartasService.getCartas().subscribe((data:cartas)=>{
      console.log('carta', data); 
      this.cartas=data;
    })
  }



}
