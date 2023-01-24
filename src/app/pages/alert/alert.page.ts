import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private AlertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.AlertCtrl.create({
      header: 'Prompt!',
      buttons: ['CANCEL','OK'],
      inputs: [
        {
          placeholder: 'Nombres'
        },
        {
          placeholder: 'Apellidos'
        },
        {
          placeholder: 'Descripción Materia'
        },
        {
          value: 'https://ionicframework.com'
        },
        {
          type: 'date',
          placeholder: 'Edad',
          min: 1,
          max: 100
        },
        {
          placeholder: 'Clave'
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8
          }
        },
        {
          placeholder: 'Edad'
        },
      ]
    });

    await alert.present();
  }

}
