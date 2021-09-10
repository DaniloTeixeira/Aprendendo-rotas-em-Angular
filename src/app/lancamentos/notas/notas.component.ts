import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css'],
})
export class NotasComponent implements OnInit {
  title: string = 'Verifique suas notas';

  constructor() {}

  ngOnInit(): void {}
}
