import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/guards/auth-guard.service';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/home/user/user.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { LoadGuardService } from './core/guards/load-guard.service';
import { CalendarComponent } from './components/calendar/calendar.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService],
    children: [
      { path: 'user', component: UserComponent }
    ]
  },
  { path: 'ball', canLoad: [LoadGuardService], loadChildren: () => import(`./components/ball/ball.module`).then(m => m.BallModule) },
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuardService] },

  { path: '',   redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', component: PageNotfoundComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
