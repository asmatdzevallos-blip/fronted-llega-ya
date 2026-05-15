import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ToastMessage {
  texto: string;
  tipo: 'success' | 'error';
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  
  toastAccion = new Subject<ToastMessage>();

  constructor() { }

  mostrarExito(mensaje: string) {
    this.toastAccion.next({ texto: mensaje, tipo: 'success' });
  }

  mostrarError(mensaje: string) {
    this.toastAccion.next({ texto: mensaje, tipo: 'error' });
  }
}