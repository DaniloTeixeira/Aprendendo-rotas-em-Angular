import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css'],
})
export class LancamentosComponent implements OnInit {
  title: string = 'Consulte seus lançamentos';

  constructor() {}

  ngOnInit(): void {}
}
