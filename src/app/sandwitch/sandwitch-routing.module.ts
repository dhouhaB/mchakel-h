import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SandwitchPage } from './sandwitch.page';

const routes: Routes = [
  {
    path: '',
    component: SandwitchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SandwitchPageRoutingModule {}
