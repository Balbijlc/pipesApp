import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { StyleClassModule } from 'primeng/styleclass';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuModule,
    MenubarModule,
    StyleClassModule

  ],
  exports:[
    MenuModule,
    MenubarModule,
    StyleClassModule

  ]
})
export class PrimeNGModule { }
