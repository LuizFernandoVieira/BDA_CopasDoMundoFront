import { Component, OnInit } from '@angular/core';

import { Copa } from '../copa';

@Component({
  selector: 'app-copas',
  templateUrl: './copas.component.html',
  styleUrls: ['./copas.component.css']
})
export class CopasComponent implements OnInit {  

  copa: Copa = {
    ano: 1930,
    dataInicio: new Date(1930, 7, 13),
    dataFim: new Date(1930, 7, 30),
    nomeCidadeAbertura: 'Montevidéu'
  };

  constructor() { }

  ngOnInit() {
  }

}
