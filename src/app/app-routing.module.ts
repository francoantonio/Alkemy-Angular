import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './home/guard/auth.guard';

const routes: Routes = [
    {
        path: '', 
        canActivate:[AuthGuard],
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'login', 
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
