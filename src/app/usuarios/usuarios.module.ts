import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    component: ListarComponent
  }
];

@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class UsuariosModule { }
