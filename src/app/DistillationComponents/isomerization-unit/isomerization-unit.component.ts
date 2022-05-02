import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-isomerization-unit',
  templateUrl: './isomerization-unit.component.html',
  styleUrls: ['./isomerization-unit.component.css']
})
export class IsomerizationUnitComponent implements OnInit {

  message: String = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.message = params['message'] || '';
    })
  }
}
