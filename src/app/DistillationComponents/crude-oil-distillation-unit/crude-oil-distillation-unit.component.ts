import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-crude-oil-distillation-unit',
  templateUrl: './crude-oil-distillation-unit.component.html',
  styleUrls: ['./crude-oil-distillation-unit.component.css']
})
export class CrudeOilDistillationUnitComponent implements OnInit {

  message: String = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.message = params['message'] || '';
    })
  }
}
