import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/common/material.module';
import { StoryFormComponent } from './story-form/story-form.component';
import { StoryComponent } from './story.component';
import { StoryRoutingModule } from './story-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TextFieldModule } from '@angular/cdk/text-field';
import { AutoResizeDirective } from 'src/app/common/directives/auto-resize.directive';
import { StoreModule } from '@ngrx/store';
import { storyReducer } from 'src/app/common/model/story/store/story.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoryEffect } from 'src/app/common/model/story/store/story.effect';

@NgModule({
  declarations: [
    StoryComponent,
    StoryFormComponent,
    AutoResizeDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TextFieldModule,
    StoreModule.forFeature('stories', storyReducer),
    EffectsModule.forFeature([StoryEffect])
],
  bootstrap: [],
})
export class StoryModule { }
