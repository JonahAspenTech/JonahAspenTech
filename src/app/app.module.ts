import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShellAndTubeComponent } from './OilRefinery/oil-refinery.component';
import { CrudeOilDistillationUnitComponent } from './DistillationComponents/crude-oil-distillation-unit/crude-oil-distillation-unit.component';
import { VacuumDistillationUnitComponent } from './DistillationComponents/vacuum-distillation-unit/vacuum-distillation-unit.component';
import { DieselHydroTreatingUnitComponent } from './DistillationComponents/diesel-hydro-treating-unit/diesel-hydro-treating-unit.component';
import { SemiRegenerativeReformerComponent } from './DistillationComponents/semi-regenerative-reformer/semi-regenerative-reformer.component';
import { FluidCatalyticCrackingUnitComponent } from './DistillationComponents/fluid-catalytic-cracking-unit/fluid-catalytic-cracking-unit.component';
import { SulferRecoveryUnitComponent } from './DistillationComponents/sulfer-recovery-unit/sulfer-recovery-unit.component';
import { IsomerizationUnitComponent } from './DistillationComponents/isomerization-unit/isomerization-unit.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShellAndTubeComponent,
    CrudeOilDistillationUnitComponent,
    VacuumDistillationUnitComponent,
    DieselHydroTreatingUnitComponent,
    SemiRegenerativeReformerComponent,
    FluidCatalyticCrackingUnitComponent,
    SulferRecoveryUnitComponent,
    IsomerizationUnitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
