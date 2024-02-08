import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

const routes: Routes = [
  {path : '', component: AboutUsComponent},
  {path : 'login', component: LoginComponent},
  {path : 'dashboard', component: DashboardComponent},
  {path : 'about-us', component: AboutUsComponent},
  {path : '**', component: AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
