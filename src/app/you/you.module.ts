import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { YouPage } from './you.page';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

  ],
  declarations: [YouPage]
} )
export class YouPageModule { }
