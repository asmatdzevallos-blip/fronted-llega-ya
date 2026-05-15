import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar implements OnInit {
  usuario: any = null;
  rol = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.usuario = this.auth.getUsuario();
    this.rol     = this.auth.getRol();
  }

  logout() {
    this.auth.logout();
  }

  irAdmin() {
    this.router.navigate(['/admin']);
  }

  irPerfil() {
    this.router.navigate(['/profile']);
  }
}