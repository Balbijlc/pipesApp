import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { StyleClassModule } from 'primeng/styleclass';





@NgModule({
  declarations: [


    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    StyleClassModule

  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
