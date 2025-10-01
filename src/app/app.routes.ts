import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { LivrosPage } from './components/livros-page/livros-page';

export const routes: Routes = [
    { path: "home", component: HomePage },
    { path: "livros", component: LivrosPage },
    { path: "", redirectTo: "/home", pathMatch: 'full' }, 
];
