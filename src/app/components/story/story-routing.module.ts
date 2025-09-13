import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryComponent } from './story.component';
import { StoryFormComponent } from './story-form/story-form.component';

const routes: Routes = [
  //base route = 'user'
  { 
    path: '', 
    component: StoryComponent,
    children: [
      { path: 'add-story', component: StoryFormComponent },
    //   { path: 'signup', component: SignupFormComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoryRoutingModule { }