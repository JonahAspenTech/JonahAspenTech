import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-semi-regenerative-reformer',
  templateUrl: './semi-regenerative-reformer.component.html',
  styleUrls: ['./semi-regenerative-reformer.component.css']
})
export class SemiRegenerativeReformerComponent implements OnInit {

  message: String = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.message = params['message'] || '';
    })
  }
}
