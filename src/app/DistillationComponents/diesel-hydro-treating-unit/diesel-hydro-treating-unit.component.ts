import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-diesel-hydro-treating-unit',
  templateUrl: './diesel-hydro-treating-unit.component.html',
  styleUrls: ['./diesel-hydro-treating-unit.component.css']
})
export class DieselHydroTreatingUnitComponent implements OnInit {

  message: String = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.message = params['message'] || '';
    })
  }
}
