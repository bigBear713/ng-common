import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TplContentDemoComponent } from './tpl-content-demo.component';
import { RouterModule, Routes } from '@angular/router';
import { NgCommonModule } from 'ng-common';

const routes: Routes = [
  {
    path: '',
    component: TplContentDemoComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgCommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TplContentDemoComponent]
})
export class TplContentDemoModule { }
