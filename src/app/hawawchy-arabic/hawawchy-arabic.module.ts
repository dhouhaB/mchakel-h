import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HawawchyArabicPageRoutingModule } from './hawawchy-arabic-routing.module';

import { HawawchyArabicPage } from './hawawchy-arabic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HawawchyArabicPageRoutingModule
  ],
  declarations: [HawawchyArabicPage]
})
export class HawawchyArabicPageModule {}
