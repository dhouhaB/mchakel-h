import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'sandwich',
    loadChildren: () => import('./sandwitch/sandwitch.module').then( m => m.SandwitchPageModule)
  },
  {
    path: 'salades',
    loadChildren: () => import('./salades/salades.module').then( m => m.SaladesPageModule)
  },
  {
    path: 'hawawchy-arabic',
    loadChildren: () => import('./hawawchy-arabic/hawawchy-arabic.module').then( m => m.HawawchyArabicPageModule)
  },
  {
    path: 'plats',
    loadChildren: () => import('./plats/plats.module').then( m => m.PlatsPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
