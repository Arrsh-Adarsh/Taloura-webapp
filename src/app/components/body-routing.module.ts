import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'user', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'writeUp', loadChildren: ()=> import('./story/story.module').then(m => m.StoryModule) },
  { path: 'library', loadChildren: ()=> import('./library/library.module').then(m => m.LibraryModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }