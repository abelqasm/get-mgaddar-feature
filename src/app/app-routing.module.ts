import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from 'src/calories-intake/user.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'user',
    loadChildren: () => import('../calories-intake/user.module').then(m => m.UserModule), 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }