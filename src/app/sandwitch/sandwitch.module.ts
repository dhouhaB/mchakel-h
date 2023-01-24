import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SandwitchPageRoutingModule } from './sandwitch-routing.module';

import { SandwitchPage } from './sandwitch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SandwitchPageRoutingModule
  ],
  declarations: [SandwitchPage]
})
export class SandwitchPageModule {}
