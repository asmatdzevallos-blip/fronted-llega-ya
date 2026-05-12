import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  usuario: any = null;
  rol = '';

  negocios = [
    { nombre: 'Pollería El Tizón',  tipo: 'Pollos - Criollo',  tiempo: '20-30 min', rating: 4.8 },
    { nombre: 'Botica San Lucas',   tipo: 'Farmacia 24h',      tiempo: '15 min',    rating: 4.9 },
    { nombre: 'Bodega Doña Rosa',   tipo: 'Abarrotes',         tiempo: '5-10 min',  rating: 4.3 },
    { nombre: 'Cevichería El Muelle', tipo: 'Pescados',        tiempo: '30 min',    rating: 4.9 },
    { nombre: 'Tambo Arequipa',     tipo: 'Marlet',            tiempo: '10 min',    rating: 4.4 },
  ];

  categorias = [
    { icono: '🍽️', nombre: 'Comida' },
    { icono: '💊', nombre: 'Farmacia' },
    { icono: '🛒', nombre: 'Mercado' },
    { icono: '🍞', nombre: 'Panaderia' },
    { icono: '🍦', nombre: 'Postres' },
    { icono: '🧃', nombre: 'Bebidas' },
    { icono: '🌻', nombre: 'Floristerias' },
  ];

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.usuario = this.auth.getUsuario();
    this.rol = this.auth.getRol();
  }

  logout() {
    this.auth.logout();
  }

  irAdmin() {
    this.router.navigate(['/admin']);
  }
}