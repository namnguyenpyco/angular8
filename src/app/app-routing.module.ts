import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { SignUpComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'list', component: ListComponent },
  { path: 'item/:id', component: ItemComponent}
];

const applicationRoutes: any = [
  {
    path: 'category',
    loadChildren: './category/category.module#CategoryModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
