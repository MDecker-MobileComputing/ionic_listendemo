import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Seite4PageRoutingModule } from './seite4-routing.module';

import { Seite4Page } from './seite4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Seite4PageRoutingModule
  ],
  declarations: [Seite4Page]
})
export class Seite4PageModule {}
