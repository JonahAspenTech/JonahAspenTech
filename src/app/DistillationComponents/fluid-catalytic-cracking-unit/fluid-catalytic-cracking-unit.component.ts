import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-fluid-catalytic-cracking-unit',
  templateUrl: './fluid-catalytic-cracking-unit.component.html',
  styleUrls: ['./fluid-catalytic-cracking-unit.component.css']
})
export class FluidCatalyticCrackingUnitComponent implements OnInit {

  message: String = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.message = params['message'] || '';
    })
  }

}
