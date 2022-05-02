import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-sulfer-recovery-unit',
  templateUrl: './sulfer-recovery-unit.component.html',
  styleUrls: ['./sulfer-recovery-unit.component.css']
})
export class SulferRecoveryUnitComponent implements OnInit {

  message: String = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.message = params['message'] || '';
    })
  }

}
