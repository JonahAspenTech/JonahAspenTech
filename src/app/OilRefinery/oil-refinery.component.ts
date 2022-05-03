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
    this.router.navigate(['/crude-oil-refinery/crude-oil-distillation']);
  }

  goToDieselHydroTreating(message: String){
    this.router.navigate(['/crude-oil-refinery/diesel-hydro-treating']);
  }
 
  goToFluidCatalyticCracking(message: String){
    this.router.navigate(['/crude-oil-refinery/fluid-catalytic-cracking']);
  }

  goToIsomerization(message: String){
    this.router.navigate(['/crude-oil-refinery/isomerization']);
  }

  goToSemiRegenerativeReformer(message: String){
    this.router.navigate(['/crude-oil-refinery/semi-regenerative-reformer']);
  }

  goToSulferRecovery(message: String){
    this.router.navigate(['/crude-oil-refinery/sulfer-recovery-unit']);
  }

  goToVacuumDisillation(message: String){
    this.router.navigate(['/crude-oil-refinery/vacuum-distillation']);
  }

}
