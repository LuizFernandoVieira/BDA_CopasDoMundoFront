import { Component, OnInit } from '@angular/core';

import { Copa } from '../copa';

@Component({
  selector: 'app-copas',
  templateUrl: './copas.component.html',
  styleUrls: ['./copas.component.css']
})
export class CopasComponent implements OnInit {  

  /*
  copa: Copa = {
    ano: 1930,
    dataInicio: new Date(1930, 7, 13),
    dataFim: new Date(1930, 7, 30),
    nomeCidadeAbertura: 'Montevidéu'
  };
  */

  copas: Copa[] = [
    { ano: 1930, dataInicio: new Date(1930, 7, 13), dataFim: new Date(1930, 7, 30), nomeCidadeAbertura: 'Montevidéu' },
    { ano: 1934, dataInicio: new Date(1934, 5, 27), dataFim: new Date(1934, 6, 10), nomeCidadeAbertura: 'Roma' },
    { ano: 1938, dataInicio: new Date(1938, 6, 4), dataFim: new Date(1938, 6, 19), nomeCidadeAbertura: 'Paris' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
