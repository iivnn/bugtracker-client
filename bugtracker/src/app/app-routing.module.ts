import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { NotAuthenticatedGuard } from './guards/not-authenticated.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthenticatedGuard], children: [
  ]},
  {path :'signin', component: LoginComponent, canActivate: [NotAuthenticatedGuard]},
  {path: '**', redirectTo: '/signin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
