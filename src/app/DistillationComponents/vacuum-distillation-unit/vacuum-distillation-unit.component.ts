import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-vacuum-distillation-unit',
  templateUrl: './vacuum-distillation-unit.component.html',
  styleUrls: ['./vacuum-distillation-unit.component.css']
})
export class VacuumDistillationUnitComponent implements OnInit {

  message: String = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.message = params['message'] || '';
    })
  }

}
