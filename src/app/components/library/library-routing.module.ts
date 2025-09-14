import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library.component';

const routes: Routes = [
  //base route = 'user'
  { 
    path: '', 
    component: LibraryComponent,
    // children: [
    //   { path: 'add-story', component: StoryFormComponent },
    // //   { path: 'signup', component: SignupFormComponent },
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }