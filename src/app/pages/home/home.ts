import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Navbar } from '../components/navbar/navbar';   // ← importa Navbar
import { Footer } from '../components/footer/footer';   // ← importa Footer

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, Navbar, Footer],   // ← agrégalos aquí
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  usuario: any = null;

  categorias = [
    { icono: '🍴', nombre: 'Restaurantes' },
    { icono: '💊', nombre: 'Farmacias' },
    { icono: '🏪', nombre: 'Bodegas' },
    { icono: '🛒', nombre: 'Mercados' },
    { icono: '🍰', nombre: 'Postres' },
    { icono: '🐾', nombre: 'Mascotas' },
  ];

  negocios: any[] = [];

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.usuario = this.auth.getUsuario();
    // Aquí podrías cargar negocios desde el backend:
    // this.http.get('/api/auth/negocios/').subscribe(...)
  }
}