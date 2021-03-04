import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TercihlerimPageRoutingModule } from './tercihlerim-routing.module';

import { TercihlerimPage } from './tercihlerim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TercihlerimPageRoutingModule
  ],
  declarations: [TercihlerimPage]
})
export class TercihlerimPageModule {}
