   import { NgModule } from '@angular/core';
   import { RouterModule, Routes } from '@angular/router';
   import { DashboardComponent } from '../dashboard/dashboard.component'
   import { ShellAndTubeComponent } from '../shell-and-tube/shell-and-tube.component';

   const routes: Routes = [
   {
   path: '',
   component: DashboardComponent,
   },
   {
   path: 'shellandtube',
   component: ShellAndTubeComponent,
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
