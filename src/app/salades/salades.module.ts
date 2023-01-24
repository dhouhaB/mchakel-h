import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaladesPageRoutingModule } from './salades-routing.module';

import { SaladesPage } from './salades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaladesPageRoutingModule
  ],
  declarations: [SaladesPage]
})
export class SaladesPageModule {}
