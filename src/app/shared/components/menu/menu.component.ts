import { Component, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  public menubar: MenuItem[] = [] ;

  public menuItems: MenuItem[] = [];

  ngOnInit () {
    this.menuItems =[
     {
      label:'Pipes de Angular',
      icon:'pi pi-deskotp',
      items: [
        {
          label:'Textos y Fechas',
          icon:'pi pi-align-left',
        },
        {
          label:'Números',
          icon:'pi pi-dollar',
        },

        {
          label:'NO comunes',
          icon:'pi pi-globe',
        }


      ]
     },

     {
      label: 'Pipe Personalizadpos',
      icon:'pi-cog',
      items: [
        {
          label:'Otro elemento',
          icon: 'pi pi-cog',

        }
      ]
     }

    ];

    this.menubar = [
      {
        label:'Pipes de Angular',
        icon:'pi pi-deskotp',
        items: [
          {
            label:'Textos y Fechas',
            icon:'pi pi-align-left',
          },
          {
            label:'Números',
            icon:'pi pi-dollar',
          },

          {
            label:'NO comunes',
            icon:'pi pi-globe',
          }


        ]
      },

      {

        label: 'Pipe Personalizadpos',
      icon:'pi-cog',
      items: [
        {
          label:'Otro elemento',
          icon: 'pi pi-cog',

        }
      ]
      }


    ]
  }





}
