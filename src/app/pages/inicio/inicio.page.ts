import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
  }

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  componentes: Componente[] = [
    {
    icon: 'alert',
    name: 'Alert',
    redirectTo: '/alert'
    },
    {
    icon: 'hammer',
    name: 'Inputs Forms',
    redirectTo: '/input'
    },
    ];

    componente: Observable<Componente[]>;

    constructor(private menuCtrl: MenuController,
      private dataService: DataService) { }
    ngOnInit() {
      this.componente = this.dataService.getMenuOpts();
    }
    mostrarMenu() {
      this.menuCtrl.open('first');
    }

}
