import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/common/material.module';
import { StoreModule } from '@ngrx/store';
import { storyReducer } from 'src/app/common/model/story/store/story.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoryEffect } from 'src/app/common/model/story/store/story.effect';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';

@NgModule({
  declarations: [
    LibraryComponent
],
  imports: [
    LibraryRoutingModule,
    MaterialModule,
    StoreModule.forFeature('stories', storyReducer),
    EffectsModule.forFeature([StoryEffect]),
],
  bootstrap: [],
})
export class LibraryModule { }
