import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-shell-and-tube',
  templateUrl: './shell-and-tube.component.html',
  styleUrls: ['./shell-and-tube.component.css']
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
