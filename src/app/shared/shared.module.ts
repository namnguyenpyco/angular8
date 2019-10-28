import { ThousandMillionPipe } from './pipes/thousand-million';
import { NgModule } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { PercentComponent } from './components/percent/percent.component';

const SHARED_COMPONENTS: ComponentType<any>[] = [
  PercentComponent
]

const SHARED_PIPES: any[] = [
  ThousandMillionPipe,
];

@NgModule({
  imports: [
  ],
  exports: [
    SHARED_PIPES,
    SHARED_COMPONENTS,
  ],
  declarations: [SHARED_PIPES, SHARED_COMPONENTS],
  providers: [SHARED_PIPES],
})
export class SharedModule { }
