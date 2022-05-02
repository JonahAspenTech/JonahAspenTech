import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-OilRefinery',
  templateUrl: './oil-refinery.component.html',
  styleUrls: ['./oil-refinery.component.css']
})
export class ShellAndTubeComponent implements OnInit {

  message: String = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.message = params['message'] || '';
    })
  }

 

}
