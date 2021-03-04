import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TercihlerimPage } from './tercihlerim.page';

const routes: Routes = [
  {
    path: '',
    component: TercihlerimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TercihlerimPageRoutingModule {}
