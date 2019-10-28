
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CateGoryComponent } from './category.component';

const routes: Routes = [
  { path: '', component: CateGoryComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class CateGoryRoutingModule { }
