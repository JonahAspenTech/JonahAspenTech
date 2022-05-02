import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { ShellAndTubeComponent } from '../shell-and-tube/shell-and-tube.component';
import { CrudeOilDistillationUnitComponent } from '../DistillationComponents/crude-oil-distillation-unit/crude-oil-distillation-unit.component';
import { VacuumDistillationUnitComponent } from '../DistillationComponents/vacuum-distillation-unit/vacuum-distillation-unit.component';
import { DieselHydroTreatingUnitComponent } from '../DistillationComponents/diesel-hydro-treating-unit/diesel-hydro-treating-unit.component';
import { SemiRegenerativeReformerComponent } from '../DistillationComponents/semi-regenerative-reformer/semi-regenerative-reformer.component';
import { FluidCatalyticCrackingUnitComponent } from '../DistillationComponents/fluid-catalytic-cracking-unit/fluid-catalytic-cracking-unit.component';
import { SulferRecoveryUnitComponent } from '../DistillationComponents/sulfer-recovery-unit/sulfer-recovery-unit.component';
import { IsomerizationUnitComponent } from '../DistillationComponents/isomerization-unit/isomerization-unit.component';


const routes: Routes = [
{
   path: '',
   component: DashboardComponent,
},
{
   path: 'crudeoilrefinery',
   component: ShellAndTubeComponent,
      children:[
         {
            path: 'crude-oil-distillation',
            component: CrudeOilDistillationUnitComponent
         },
         {
            path: 'diesel-hydro-treating',
            component: DieselHydroTreatingUnitComponent
         },
         {
            path: 'fluid-catalytic-cracking',
            component: FluidCatalyticCrackingUnitComponent
         },
         {
            path: 'isomerization',
            component: IsomerizationUnitComponent
         },
         {
            path: 'semi-regenerative-reformer',
            component: SemiRegenerativeReformerComponent
         },
         {
            path: 'sulfer-recovery-unit',
            component: SulferRecoveryUnitComponent
         },
         {
            path: 'vacuum-distillation',
            component: VacuumDistillationUnitComponent
         }
]
}
  
];

@NgModule({
imports: [
RouterModule.forRoot(routes)
],
exports: [
RouterModule
],
declarations: []
})
export class AppRoutingModule { }
