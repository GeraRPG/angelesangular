import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CakeListComponent } from "./components/cakes/cake-list/cake-list.component";
import { CakeFormComponent } from "./components/cakes/cake-form/cake-form.component";
import { CakeAboutComponent } from './components/cake-about/cake-about.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //redirectTo: '/cakes',
    //pathMatch: 'full',
  },
  {
    path: 'cakes',
    component: CakeListComponent,
  },
  {
    path: 'cakes/add',
    component: CakeFormComponent,
  },
  {
    path: 'cakes/edit/:id',
    component: CakeFormComponent,
  },
  {
    path: 'about',
    component: CakeAboutComponent,
  },
  {
    path: 'gallery',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
