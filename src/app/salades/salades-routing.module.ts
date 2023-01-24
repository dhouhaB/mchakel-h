import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaladesPage } from './salades.page';

const routes: Routes = [
  {
    path: '',
    component: SaladesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaladesPageRoutingModule {}
