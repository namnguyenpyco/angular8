import { NgModule } from '@angular/core';
import { CateGoryComponent } from './category.component';
import { CateGoryRoutingModule } from './category-routing.module';

@NgModule({
  imports: [
    CateGoryRoutingModule
  ],
  declarations: [
    CateGoryComponent,
  ]
})

export class CategoryModule { }
