import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile implements OnInit {
  usuario: any = null;
  rol = '';

  constructor(public auth: AuthService) {}

  ngOnInit() {
    this.usuario = this.auth.getUsuario();
    this.rol = this.auth.getRol();
  }

  logout() { this.auth.logout(); }
}