import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AntsComponent } from './ants/ants.component'
import { DashboardComponent }   from './dashboard/dashboard.component';
import { AntDetailComponent } from './ant-detail/ant-detail.component'

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: AntDetailComponent },
    { path: 'ants', component: AntsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}