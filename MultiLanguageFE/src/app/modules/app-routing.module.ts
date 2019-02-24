import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {VisaServicesComponent} from '../components/visa-services/visa-services.component';
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component';

const routes: Routes =
  [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'visa-services',
      component: VisaServicesComponent
    },
    {
      path : '',
      redirectTo: '/home',
      pathMatch : 'full'
    },
    { path: 'not-found',
      component: PageNotFoundComponent,
    },
    { path: '**',
      redirectTo: '/not-found'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
