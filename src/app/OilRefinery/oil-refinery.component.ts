import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-OilRefinery',
  templateUrl: './oil-refinery.component.html',
  styleUrls: ['./oil-refinery.component.css']
})
export class ShellAndTubeComponent implements OnInit {

  message: String = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.message = params['message'] || '';
    })
  }

  goToCrudeOilDistillation(message: String){
    this.router.navigate(['/crude-oil-refinery/crude-oil-distillation'], {queryParams: {message: message}});
  }

  goToDieselHydroTreating(message: String){
    this.router.navigate(['/crude-oil-refinery/diesel-hydro-treating'], {queryParams: {message: message}});
  }
 
  goToFluidCatalyticCracking(message: String){
    this.router.navigate(['/crude-oil-refinery/fluid-catalytic-cracking'], {queryParams: {message: message}});
  }

  goToIsomerization(message: String){
    this.router.navigate(['/crude-oil-refinery/isomerization'], {queryParams: {message: message}});
  }

  goToSemiRegenerativeReformer(message: String){
    this.router.navigate(['/crude-oil-refinery/semi-regenerative-reformer'], {queryParams: {message: message}});
  }

  goToSulferRecovery(message: String){
    this.router.navigate(['/crude-oil-refinery/sulfer-recovery-unit'], {queryParams: {message: message}});
  }

  goToVacuumDisillation(message: String){
    this.router.navigate(['/crude-oil-refinery/vacuum-distillation'], {queryParams: {message: message}});
  }

}
