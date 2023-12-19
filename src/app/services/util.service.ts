import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, AlertOptions, LoadingController, LoadingOptions, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  loadingController = inject(LoadingController)
  router= inject(Router)
  toastController = inject(ToastController)
  alertController = inject(AlertController)
  modalController = inject(ModalController)

  constructor() {

  }

  setElementInLocalStorage(key: string, element: any) {
    return localStorage.setItem(key, JSON.stringify(element));
  }

  getElementFromLocalStorage(key: string) {
    const item = localStorage.getItem(key);
    if (item !== null) {
      return JSON.parse(item);
    }
    return null;
  }

  //funcion para llamar al loading
  async presentLoading(opts?: LoadingOptions) {
    const loading = await this.loadingController.create(opts);
    await loading.present();
  }

  //ocultar el loading una vez termino de cargar
  async dismissLoading() {
    return await this.loadingController.dismiss();
  }

  //mensajes de validaciones y de errores
  async presentToast(opts: ToastOptions) {
    const toast = await this.toastController.create(opts);
    toast.present();
  }

  //router
  routerLink(url: string) {
    this.router.navigateByUrl(url)
  }

  // mensaje de alerta (en caso de cerrar sesion, eliminar o editar datos, etc...)
  async presentAlert(opts: AlertOptions) {
    const alert = await this.alertController.create(opts);

    await alert.present();
  }

  //modal
  async presentModal(opts: ModalOptions) {
    const modal = await this.modalController.create(opts);
    await modal.present();
    //la data que puede que devuelva el modal al cerrarse
    const { data } = await modal.onWillDismiss();
    if (data) {
      return data;
    }
  }
  //si cierras la modal y quieras devolver una data, se pasa atraves de esta funcion
  dismissModal(data?: any) {
    this.modalController.dismiss(data);
  }

}
