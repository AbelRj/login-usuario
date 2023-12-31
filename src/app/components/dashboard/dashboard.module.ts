import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';



@NgModule({
  declarations: [DashboardComponent,
    UsuariosComponent,
    InicioComponent,
    NavbarComponent,
    CrearUsuarioComponent,
    ReportesComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    
  ]
})
export class DashboardModule { }
